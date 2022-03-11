export const Label = ({ id, children }) => {
  return (
    <label
      htmlFor={id}
      className="inline-flex items-center gap-2 tracking-widest uppercase"
    >
      {children}
    </label>
  );
};
