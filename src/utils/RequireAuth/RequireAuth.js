import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const RequireAuth = ({ children }) => {
  let location = useLocation();
  console.log(location, " => Line No: 17");
  const [user, loading, error] = useAuthState(auth);
  let content;
  if (loading && !error) {
    content = <p>Loading...</p>;
  }
  if (!loading && error) {
    content = <p>{error}</p>;
  }
  if (!loading && !error) {
    content = children;
  }
  if (!loading && !error && !user?.displayName) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }
  return content;
};

export default RequireAuth;
