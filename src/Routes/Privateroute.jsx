import { useContext } from "react";
import { ContextProvider } from "../Providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(ContextProvider);
  if (loader) {
    return <p>Loading.......</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathName} to="/login" replace></Navigate>;
};

export default Privateroute;
