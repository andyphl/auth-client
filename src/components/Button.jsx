import clsx from "clsx";

export const Button = ({ disabled, className, children }) => {
  return (
    <button
      disabled={disabled}
      className={clsx("btn", className)}
      type="submit"
    >
      {children}
    </button>
  );
};
