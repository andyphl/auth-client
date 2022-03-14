import {
  Icon,
  Button,
  Label,
  ValidMessage,
  ValidIcon,
  Input,
  ErrorResponse,
} from "../components";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { useEffect, useState } from "react";
import axios from "../services/axios.services";

const EMAIL_REGEX = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/;

export const SignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordAgain, setPasswordAgain] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setIsEmailValid(result);
  }, [email]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setIsPasswordValid(result);
  }, [password]);

  useEffect(() => {
    if (passwordAgain === "") setIsPasswordMatch(false);
    else setIsPasswordMatch(password === passwordAgain);
  }, [password, passwordAgain]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const { username, email, password } = Object.fromEntries(
      new FormData(event.target).entries()
    );

    if (!EMAIL_REGEX.test(email) || !PASSWORD_REGEX.test(password)) {
      setErrorMessage("Invalid user input");
      return false;
    }

    try {
      const response = await axios.post(
        "/api/auth/signup",
        JSON.stringify({ username, email, password })
      );

      navigate("/signin", { replace: true });
    } catch (error) {
      if (error?.response?.status === 409) {
        setEmail("");
      }
      setErrorMessage(error?.response?.data?.message || "Something wrong");
    }
    return false;
  };

  return (
    <AuthLayout title="Sign Up">
      {errorMessage ? (
        <ErrorResponse
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          buttonText="Back to sign up"
        />
      ) : (
        <>
          <form className="flex flex-col gap-4 mb-4" onSubmit={onSubmit}>
            <div className="input-wrap">
              <Label id="username">
                <Icon.User /> Username
              </Label>
              <Input
                type="text"
                name="username"
                id="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrap">
              <Label id="email">
                <Icon.Mail /> Email
                <ValidIcon target={email} isTargetValid={isEmailValid} />
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ValidMessage target={email} isTargetValid={isEmailValid}>
                <span>Invalid email format.</span>
              </ValidMessage>
            </div>
            <div className="input-wrap">
              <Label id="password">
                <Icon.Lock /> Password
                <ValidIcon target={password} isTargetValid={isPasswordValid} />
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <ValidMessage target={password} isTargetValid={isPasswordValid}>
                <span>
                  Password must be 8 to 40 characters.
                  <br /> Must contain at least one number, one lowercase
                  character and one uppercase character.
                </span>
              </ValidMessage>
            </div>
            <div className="input-wrap">
              <Label id="password-again">
                <Icon.Lock /> Enter password again
                <ValidIcon
                  target={passwordAgain}
                  isTargetValid={isPasswordMatch}
                />
              </Label>
              <Input
                type="password"
                id="password-again"
                value={passwordAgain}
                required
                onChange={(e) => setPasswordAgain(e.target.value)}
              />
              <ValidMessage
                target={passwordAgain}
                isTargetValid={isPasswordMatch}
              >
                <span>Password doesn't match.</span>
              </ValidMessage>
            </div>

            <Button
              disabled={
                !isEmailValid || !isPasswordValid || !isPasswordMatch
                  ? true
                  : false
              }
              className="text-lg mt-5 transition-base"
            >
              Sign Up
            </Button>
          </form>
          <p className="text-center">
            Already have an account?
            <Link
              to="/signin"
              className="text-primary-base font-bold ml-2 hover:text-secondary-dark transition-base"
            >
              Sign In
            </Link>
          </p>
        </>
      )}
    </AuthLayout>
  );
};
