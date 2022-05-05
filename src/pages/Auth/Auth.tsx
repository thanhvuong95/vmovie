import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../shared/firebase";
import { User } from "../../shared/type";
import store from "../../store/store";

const Auth = () => {
  const { user, setUser } = store();

  const handleSignIn = (provider: any) => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log(user);

        const userInfo: User = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        setUser(userInfo);
      })
      .catch((error) => {});
  };

  if (user) return <Navigate to={"/"} />;

  return (
    <div className="h-screen grid place-content-center">
      <div className="w-full bg-[#2a2f3a] px-10 py-10 rounded-md text-center">
        <h2 className="text-2xl">Sign In</h2>
        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={() => handleSignIn(new GoogleAuthProvider())}
            className="flex items-center px-2 py-1 bg-gray-50  text-black rounded-md w-full hover:bg-gray-300 transition-all duration-200 ease-in"
          >
            <i className="bx bxl-google text-2xl mr-2 text-orange-600 "></i>
            Sign In With Google
          </button>
          <button
            onClick={() => handleSignIn(new FacebookAuthProvider())}
            className="flex items-center px-2 py-1 bg-blue-500 rounded-md w-full hover:bg-blue-600 transition-all duration-200 ease-in"
          >
            <i className="bx bxl-facebook text-2xl mr-2"></i>
            Sign In With Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
