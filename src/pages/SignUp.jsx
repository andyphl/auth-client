import { Icon, Input, Button, Card } from "../components";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <Card className="flex flex-col gap-2 px-5 py-10 my-28 w-11/12 md:w-2/3 lg:w-1/2 relative bg-white">
      <Link to="/" className="absolute top-2 right-2 p-2 group">
        <Icon.ArrowLeftCircle className="w-10 h-full stroke-primary-base group-hover:stroke-secondary-dark  transition-base" />
      </Link>
      <h2 className="skew-title text-5xl uppercase tracking-widest mb-8 ">
        Sign Up
      </h2>
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
    </Card>
  );
};
