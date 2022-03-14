import clsx from "clsx";

export const Input = ({ className, ...restProps }) => {
  return <input {...restProps} className={clsx("input", className)} />;
};
