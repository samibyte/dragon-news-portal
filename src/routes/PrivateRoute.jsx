import { use } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (user && user?.email) {
    return children;
  } else {
    alert("Log in to view news");
  }
  return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;
