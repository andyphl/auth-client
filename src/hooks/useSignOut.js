import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "../services/axios.services";

const useSignOut = () => {
  const { setAuth } = useContext(AuthContext);
  const signOut = async () => {
    try {
      const response = await axios.get("/api/auth/signout");
      if (response.status === 204) {
        setAuth({});
        console.log("Sign out successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return signOut;
};

export default useSignOut;
