import { Link } from "react-router-dom";

const SEP13RoutingMenuEx1 = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/demo">
                Demo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SEP13RoutingMenuEx1;
