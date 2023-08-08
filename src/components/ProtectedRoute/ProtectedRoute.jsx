import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, isInited, children }) => {
  console.log("isLoggedIn?", isInited);

  if (!isInited) return null;

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export { ProtectedRoute };
