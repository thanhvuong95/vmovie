import React, { FC, useEffect } from "react";
import { ErrorContainer, Routing } from "./components";
import { BackTop } from "./components/BackTop/BackTop";
import { auth } from "./shared/firebase";
import store from "./store/store";

const App: FC = () => {
  const { setUser } = store();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          uid: user.uid,
          displayName: user?.displayName,
          email: user?.displayName,
          photoURL: user?.photoURL,
        });
      }
    });
  }, [setUser]);

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
