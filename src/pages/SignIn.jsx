import { Icon, Input, Button, Card } from "../components";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <Card className="flex flex-col gap-5 px-5 py-10 my-28 w-10/12 sm:w-1/2 relative bg-white">
      <Link
        to="/"
        className="absolute top-2 right-2 block p-2 group transition-base cursor-pointer"
      >
        <Icon.ArrowLeftCircle className="h-10 w-10 pointer-events-none stroke-primary-base group-hover:stroke-secondary-dark  transition-base" />
      </Link>
      <h2 className="skew-title text-5xl uppercase tracking-widest mb-8 ">
        Sign In
      </h2>
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
    </Card>
  );
};
