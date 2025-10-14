import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

interface SEP13RoutingMenuEx1Type {
  id: number;
  username: string;
  location: string;
  skills: string[];
  department: string;
}

const SEP13RoutingMenuEx1 = () => {
  const [info, setInfo] = useState<SEP13RoutingMenuEx1Type>({
    id: 1,
    username: "Nilay",
    location: "Nabadwip",
    skills: ["Java", "JS", "C++"],
    department: "IT",
  });
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Main Page
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li>
              {/* NavLink is used to add active class. */}
              <NavLink
                to="/demo"
                style={({ isActive }) => ({
                  color: isActive ? "purple" : "red",
                  backgroundColor: isActive ? "yellow" : "blue",
                  border: isActive ? "2px solid red" : "2px solid green",
                })}
              >
                Demo
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/profile/${info.id}`}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/profile2/name/${info.username}/dept/${info.department}`}
              >
                Name & Department
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/info" state={{ info }}>
                User Details
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SEP13RoutingMenuEx1;
