import clsx from "clsx";
import { Icon } from ".";

export const ValidMessage = ({ target, isTargetValid, children }) => {
  return (
    <p
      className={clsx(
        "inline-flex items-center gap-2 bg-black text-white rounded-lg p-1",
        (target.length === 0 || isTargetValid) && "hidden"
      )}
    >
      <Icon.AlertCircle className="flex-shrink-0" />
      {children}
    </p>
  );
};
