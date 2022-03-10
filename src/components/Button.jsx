import clsx from "clsx";

export const Button = ({ className, children }) => {
  return (
    <button className={clsx("btn", className)} type="submit">
      {children}
    </button>
  );
};
