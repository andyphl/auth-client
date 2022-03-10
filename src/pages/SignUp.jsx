import { Icon, Input, Button } from "../components";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

export const SignUp = () => {
  return (
    <AuthLayout title="Sign In">
      <form className="flex flex-col gap-4 mb-4">
        <Input
          name="username"
          id="username"
          label="username"
          required
          icon={<Icon.User />}
        />
        <Input
          type="email"
          name="email"
          id="email"
          label="email"
          required
          icon={<Icon.Mail />}
        />
        <Input
          type="password"
          name="password"
          id="password"
          label="password"
          required
          icon={<Icon.Lock />}
        />
        <Input
          type="password"
          id="password-again"
          label="enter password again"
          required
          icon={<Icon.Lock />}
        />
        <Button className="text-lg mt-5 transition-base">Sign In</Button>
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
    </AuthLayout>
  );
};
