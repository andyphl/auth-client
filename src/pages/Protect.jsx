import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useState, useEffect } from "react";

export const Protect = () => {
  const axiosPrivate = useAxiosPrivate();
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axiosPrivate.get("/api/auth/protected");
      setUser(response.data);
    })();
  }, [axiosPrivate]);

  return <div className="w-[90%] break-words">{JSON.stringify(user)}</div>;
};
