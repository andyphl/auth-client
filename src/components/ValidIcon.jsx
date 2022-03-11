import { Icon } from ".";

export const ValidIcon = ({ target, isTargetValid }) => {
  return (
    <>
      {isTargetValid ? (
        <Icon.CheckCircle className="w-6 stroke-green-600" />
      ) : target.length === 0 ? (
        ""
      ) : (
        <Icon.XCircle className="w-6 stroke-red-600" />
      )}
    </>
  );
};
