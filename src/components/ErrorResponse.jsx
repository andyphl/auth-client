import { useEffect } from "react";
import { Button } from ".";

export const ErrorResponse = ({
  errorMessage,
  setErrorMessage,
  buttonText,
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 5000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [setErrorMessage]);

  return (
    <>
      <p className="text-red-600 text-center">{errorMessage}</p>
      <Button onClick={() => setErrorMessage("")}>{buttonText}</Button>
    </>
  );
};
