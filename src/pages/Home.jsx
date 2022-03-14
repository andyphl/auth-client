import { Link } from "react-router-dom";
import useRefreshToken from "../hooks/useRefreshToken";
import axios from "../services/axios.services";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

export const Home = () => {
  const refresh = useRefreshToken();
  const { auth, setAuth } = useContext(AuthContext);

  const onClick = () => {
    refresh();
  };

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

  return (
    <div className="flex gap-5">
      <Link to="/protect">Protect</Link>
      {!auth.token ? (
        <Link to="/signin">Sign In</Link>
      ) : (
        <>
          <button onClick={onClick}>Refresh</button>
          <button onClick={signOut}>Sign Out</button>
        </>
      )}
    </div>
  );
};
