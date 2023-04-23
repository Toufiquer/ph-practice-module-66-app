import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";
// import { getAuth } from "firebase/auth";

const LogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let location = useLocation();
  // let auth = getAuth();

  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  let content;
  if (loading && !error) {
    content = <p>Loading...</p>;
  }
  if (!loading && error) {
    content = <p>{error}</p>;
  }
  if (!loading && !error) {
    content = (
      <>
        <div className="min-h-screen w-full flex items-center justify-center  dark:bg-gray-700">
          <div className=" w-[2 80px]">
            <div className="flex items-center">
              <button
                onClick={() => signInWithGoogle()}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  return content;
};

export default LogIn;
