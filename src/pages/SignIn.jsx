import { Icon, Label, Button, ErrorResponse, Input } from "../components";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import axios from "../services/axios.services";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

export const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevPath = location.state?.from?.pathname || "/";
  const { auth, setAuth } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

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
      setErrorMessage(error?.response?.data?.message || "Something wrong");
    }
  };

  return (
    <>
      {auth.token ? (
        <Navigate to="/" replace />
      ) : (
        <AuthLayout title="Sign In">
          {errorMessage ? (
            <ErrorResponse
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              buttonText="Back to sign in"
            />
          ) : (
            <>
              <form className="flex flex-col gap-5 mb-4" onSubmit={onSubmit}>
                <div className="input-wrap">
                  <Label id="email">
                    <Icon.Mail /> Email
                  </Label>
                  <Input type="email" name="email" id="email" required />
                </div>
                <div className="input-wrap">
                  <Label id="password">
                    <Icon.Lock /> Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                </div>
                <Button className="text-lg mt-5 transition-base">
                  Sign In
                </Button>
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
            </>
          )}
        </AuthLayout>
      )}
    </>
  );
};
