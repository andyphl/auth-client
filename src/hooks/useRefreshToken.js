import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "../services/axios.services";

const useRefreshToken = () => {
  const { setAuth } = useContext(AuthContext);

  const refresh = async () => {
    try {
      const response = await axios.get("/api/auth/refresh", {
        withCredentials: true,
      });
      setAuth((prevAuth) => {
        console.log(prevAuth.token);
        console.log(response.data.token);
        return { ...prevAuth, token: response.data.token };
      });
      return response.data.token;
    } catch (error) {
      setAuth({});
    }
  };

  return refresh;
};

export default useRefreshToken;
