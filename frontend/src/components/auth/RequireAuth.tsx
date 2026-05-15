import { useLocation, Redirect } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  let location = useLocation();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/login" />;
  }

  return children;
};
