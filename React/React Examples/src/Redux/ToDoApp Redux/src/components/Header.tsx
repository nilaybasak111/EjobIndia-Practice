//import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluidj bg-secondary shadow p-2 d-flex justify-content-between align-items-center text-light">
      <section style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        TODO APP
      </section>
      <aside>
        <div className="btn btn-primary" onClick={() => navigate("/addtodo")}>
          Create
        </div>
        <div
          className="btn btn-success ms-3"
          onClick={() => navigate("/todos")}
        >
          Show
        </div>
      </aside>
    </div>
  );
};

export default Header;
