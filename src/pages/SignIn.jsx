import { Icon, Label, Button } from "../components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import axios from "../services/axios.services";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPath = location.state?.from?.pathname || "/";
  const { setAuth } = useContext(AuthContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    const { password, email } = Object.fromEntries(
      new FormData(event.target).entries()
    );

    try {
      const response = await axios.post(
        "/api/auth/signin",
        JSON.stringify({ email, password })
      );

      const { user, token } = response?.data;
      setAuth({ user, token });

      navigate(prevPath, { replace: true });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <AuthLayout title="Sign In">
      <form className="flex flex-col gap-5 mb-4" onSubmit={onSubmit}>
        <div className="input-wrap">
          <Label id="email">
            <Icon.Mail /> Email
          </Label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="input"
          />
        </div>
        <div className="input-wrap">
          <Label id="password">
            <Icon.Lock /> Password
          </Label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="input"
          />
        </div>
        <Button className="text-lg mt-5 transition-base">Sign In</Button>
      </form>
      <p className="text-center">
        Dosen't have an account?
        <Link
          to="/signup"
          className="text-primary-base font-bold ml-2 hover:text-secondary-dark transition-base"
        >
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};
