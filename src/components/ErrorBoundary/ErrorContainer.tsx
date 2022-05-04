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
    <div className="grid place-content-center w-full  h-screen text-center px-3">
      <div className="app-container">
        <p className="text-red-600 text-3xl">Something went wrong:</p>
        <pre className="py-4 whitespace-normal">{error.message}</pre>
        <button
          onClick={resetErrorBoundary}
          className="py-2 px-4 outline-none border-none bg-yellow rounded-md"
        >
          Try again
        </button>
      </div>
    </div>
  );
};
export const ErrorContainer: FC<ErrorContainerProp> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};
