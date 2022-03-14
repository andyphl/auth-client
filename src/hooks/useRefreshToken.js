import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "../services/axios.services";

const isEmpty = (obj) => {
  for (let key in obj) return false;
  return true;
};

const useRefreshToken = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const refresh = async () => {
    try {
      const response = await axios.get("/api/auth/refresh");
      setAuth((prevAuth) => {
        console.log(prevAuth.token);
        console.log(response.data.token);
        return { ...prevAuth, token: response.data.token };
      });
      return response.data.token;
    } catch (error) {
      if (!isEmpty(auth)) {
        setAuth({});
      }
    }
  };

  return refresh;
};

export default useRefreshToken;
