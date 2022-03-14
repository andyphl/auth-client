import { Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { AuthContext } from "../context/AuthProvider";
import { Icon } from ".";

export const PersistLogin = () => {
  const { auth } = useContext(AuthContext);
  const refresh = useRefreshToken();
  const [loadingLoginData, setLoadingLoginData] = useState(true);

  useEffect(() => {
    !auth.token
      ? (async () => {
          try {
            await refresh();
          } catch (error) {
            console.log(error);
          } finally {
            setLoadingLoginData(false);
          }
        })()
      : setLoadingLoginData(false);
  }, [refresh, auth.token]);

  return (
    <>
      {loadingLoginData ? <Icon.Loader className="animate-spin" /> : <Outlet />}
    </>
  );
};
