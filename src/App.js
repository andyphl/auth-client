import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PersistLogin } from "./components";
import { RequireAuth } from "./components/RequireAuth";
import { SignIn, SignUp, Home, Protect } from "./pages";
import { AuthContext } from "./context/AuthProvider";
import { useContext } from "react";
import useSignOut from "./hooks/useSignOut";
import useRefreshToken from "./hooks/useRefreshToken";

const App = () => {
  const { auth } = useContext(AuthContext);
  const signOut = useSignOut();
  const refresh = useRefreshToken();

  return (
    <div className="w-screen min-h-screen flex-center flex-col">
      <BrowserRouter>
        <nav className="mb-auto w-full flex justify-around bg-gray-light">
          <Link to="/">Home</Link>
          <Link to="/protect">Protect</Link>
          {auth.token ? (
            <>
              <Link to="/" onClick={refresh}>
                Refresh
              </Link>
              <Link to="/" onClick={signOut}>
                Sign out
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin">Signin</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route path="/signin" exact element={<SignIn />} />
            <Route path="/signUp" exact element={<SignUp />} />
            <Route path="/" exact element={<Home />} />
            <Route element={<RequireAuth />}>
              <Route path="/protect" exact element={<Protect />} />
            </Route>
          </Route>
        </Routes>
        <div className="mb-auto invisible"></div>
      </BrowserRouter>
    </div>
  );
};

export default App;
