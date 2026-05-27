import { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  return (
    <div className="dashboard-sidebar">
      {/* H */}

      <div className="sidebar-hamburger" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </div>

      {/* Sidebar Menu */}

      <div className={showMenu ? "sidebar-menu active" : "sidebar-menu"}>
        <button
          className={location.pathname === "/dashboard" ? "active-menu" : ""}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>

        <button
          className={location.pathname === "/admin" ? "active-menu" : ""}
          onClick={() => navigate("/admin")}
        >
          Admin
        </button>

        <button
          className={location.pathname === "/users" ? "active-menu" : ""}
          onClick={() => navigate("/users")}
        >
          Users
        </button>

        <button
          className={location.pathname === "/products" ? "active-menu" : ""}
          onClick={() => navigate("/products")}
        >
          Products
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
