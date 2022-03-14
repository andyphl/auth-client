import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistLogin } from "./components";
import { RequireAuth } from "./components/RequireAuth";
import { SignIn, SignUp, Home, Protect } from "./pages";

const App = () => {
  return (
    <div className="w-screen min-h-screen flex-center flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route element={<PersistLogin />}>
            <Route path="/" exact element={<Home />} />
            <Route element={<RequireAuth />}>
              <Route path="/protect" exact element={<Protect />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
