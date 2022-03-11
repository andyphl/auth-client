import { Icon, Label, Button } from "../components";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

export const SignIn = () => {
  return (
    <AuthLayout title="Sign In">
      <form className="flex flex-col gap-5 mb-4">
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
