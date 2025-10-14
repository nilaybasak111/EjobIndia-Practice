import { useNavigate } from "react-router-dom";

const SEP14RoutingDashboardEx1 = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <h3>Welcome to My Dashboard Component</h3>
      <input type="button" value="Logout" onClick={logout} />
    </>
  );
};

export default SEP14RoutingDashboardEx1;
