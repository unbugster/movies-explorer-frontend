import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, isInited, children }) => {
  if (!isInited) return null;

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export { ProtectedRoute };
