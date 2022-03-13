import { Link } from "react-router-dom";
import useRefreshToken from "../hooks/useRefreshToken";

export const Home = () => {
  const refresh = useRefreshToken();

  const onClick = () => {
    refresh();
  };

  return (
    <div className="flex gap-5">
      <Link to="/protect">Protect</Link>
      <Link to="/signin">Sign In</Link>
      <button onClick={onClick}>Refresh</button>
    </div>
  );
};
