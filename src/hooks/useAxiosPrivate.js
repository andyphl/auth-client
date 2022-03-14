import { axiosPrivate } from "../services/axios.services";
import { useEffect, useContext } from "react";
import useRefreshToken from "./useRefreshToken";
import { AuthContext } from "../context/AuthProvider";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        // Try to attach token to authorization header before request
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        // If access token expired, refresh it!
        const prevRequestConfig = error.config;
        if (error.response.status === 403 && !prevRequestConfig.sent) {
          prevRequestConfig.sent = true;
          const newToken = await refresh();
          prevRequestConfig.headers["Authorization"] = `Bearer ${newToken}`;
          // Make request again
          return axiosPrivate(prevRequestConfig);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
