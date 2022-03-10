import { isValidElement, cloneElement } from "react";

export const Input = ({ type = "text", name, id, label, required, icon }) => {
  return (
    <div className="flex flex-col gap-2 text-sm md:text-base">
      {label && (
        <label
          htmlFor={id}
          className="inline-flex items-center gap-2 tracking-widest uppercase"
        >
          {isValidElement(icon) && cloneElement(icon)}
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        required={required}
        className="input"
      />
    </div>
  );
};
