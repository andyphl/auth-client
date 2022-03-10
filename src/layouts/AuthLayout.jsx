import { Icon, Card } from "../components";
import { Link } from "react-router-dom";

const AuthLayout = ({ title, children }) => {
  return (
    <Card className="flex flex-col gap-5 px-5 py-10 my-28  w-11/12 md:w-2/3 lg:w-1/2 relative bg-white">
      <Link to="/" className="absolute top-2 right-2 block p-2 group">
        <Icon.ArrowLeftCircle className="h-10 w-10 pointer-events-none stroke-primary-base group-hover:stroke-secondary-dark  transition-base" />
      </Link>
      <h2 className="skew-title text-5xl uppercase tracking-widest mb-8 ">
        {title}
      </h2>
      {children}
    </Card>
  );
};

export default AuthLayout;
