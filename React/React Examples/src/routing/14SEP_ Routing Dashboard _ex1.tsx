import { Link, Outlet, useNavigate } from "react-router-dom";

const SEP14RoutingDashboardEx1 = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <h3>Welcome to My Dashboard Component</h3>
        <input type="button" value="Logout" onClick={logout} />
        <br />
        <br />
        <ul>
          <li>
            <Link to="/dashboard/product" target="_blank">
              Product
            </Link>
          </li>
          <li>
            <Link to="/dashboard/contact" target="_blank">
              Contact
            </Link>
          </li>
        </ul>
        <br />
        <br />
        <div
          style={{
            border: "2px solid red",
            padding: "10px",
            margin: "10px",
            backgroundColor: "yellow",
            width: "50%",
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SEP14RoutingDashboardEx1;
