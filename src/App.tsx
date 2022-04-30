import React, { FC } from "react";
import { ErrorContainer, Routing } from "./components";

const App: FC = () => {
  return (
    <div className="root font-primary min-h-screen bg-backgroundDark text-textPrimary">
      <ErrorContainer>
        <Routing />
      </ErrorContainer>
    </div>
  );
};

export default App;
