import { Icon, Button, Label, ValidMessage, ValidIcon } from "../components";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { useEffect, useState } from "react";
import axios from "../services/axios.services";

const EMAIL_REGEX = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/;

export const SignUp = () => {
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

  useEffect(() => {
    setErrorMessage("");
  }, [password]);

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    const { username, email, password } = Object.fromEntries(
      new FormData(event.target).entries()
    );

    if (!EMAIL_REGEX.test(email) || !PASSWORD_REGEX.test(password)) {
      setErrorMessage("Invalid user input");
      return;
    }

    try {
      const response = await axios.post(
        "/api/auth/signup",
        JSON.stringify({ username, email, password })
      );
      const { token, user } = response.data;
      console.log(token, user);
    } catch (error) {
      setErrorMessage(error?.response?.data?.message);
    }
  };

  return (
    <AuthLayout title="Sign Up">
      <form className="flex flex-col gap-4 mb-4" onSubmit={onSubmit}>
        <div className="input-wrap">
          <Label id="username">
            <Icon.User /> Username
          </Label>
          <input
            type="text"
            name="username"
            id="username"
            required
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrap">
          <Label id="email">
            <Icon.Mail /> Email
            <ValidIcon target={email} isTargetValid={isEmailValid} />
          </Label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="input"
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
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ValidMessage target={password} isTargetValid={isPasswordValid}>
            <span>
              Password must be 8 to 40 characters.
              <br /> Must contain at least one number, one lowercase character
              and one uppercase character.
            </span>
          </ValidMessage>
        </div>
        <div className="input-wrap">
          <Label id="password-again">
            <Icon.Lock /> Enter password again
            <ValidIcon target={passwordAgain} isTargetValid={isPasswordMatch} />
          </Label>
          <input
            type="password"
            id="password-again"
            required
            className="input"
            onChange={(e) => setPasswordAgain(e.target.value)}
          />
          <ValidMessage target={passwordAgain} isTargetValid={isPasswordMatch}>
            <span>Password doesn't match.</span>
          </ValidMessage>
        </div>
        {errorMessage.length !== 0 && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
        <Button
          disabled={
            !isEmailValid || !isPasswordValid || !isPasswordMatch ? true : false
          }
          className="text-lg mt-5 transition-base"
        >
          Sign In
        </Button>
      </form>
      <p className="text-center">
        Already have an account?
        <Link
          to="/signin"
          className="text-primary-base font-bold ml-2 hover:text-secondary-dark transition-base"
        >
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};
