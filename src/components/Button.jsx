import clsx from "clsx";

export const Button = ({ className, children, ...restProps }) => {
  return (
    <button {...restProps} className={clsx("btn", className)} type="submit">
      {children}
    </button>
  );
};
