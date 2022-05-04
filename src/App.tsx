import React, { FC } from "react";
import { ErrorContainer, Routing } from "./components";
import { BackTop } from "./components/BackTop/BackTop";

const App: FC = () => {
  return (
    <div className="root font-primary min-h-screen bg-backgroundDark text-textPrimary">
      <ErrorContainer>
        <Routing />
        <BackTop />
      </ErrorContainer>
    </div>
  );
};

export default App;
