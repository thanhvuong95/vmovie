import React, { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
interface ErrorFallbackProp {
  error: any;
  resetErrorBoundary: any;
}
interface ErrorContainerProp {
  children: React.ReactNode;
}
const ErrorFallback: FC<ErrorFallbackProp> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className="grid place-content-center h-screen text-center">
      <p className="text-red-600 text-3xl">Something went wrong:</p>
      <pre className="py-4">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="py-2 px-4 outline-none border-none bg-yellow rounded-md"
      >
        Try again
      </button>
    </div>
  );
};
export const ErrorContainer: FC<ErrorContainerProp> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};
