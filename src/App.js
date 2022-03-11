import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "./pages";

const App = () => {
  return (
    <div className="w-screen min-h-screen flex-center flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<div>Home</div>} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signUp" exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
