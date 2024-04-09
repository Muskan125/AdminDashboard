import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../allCss/SideNav.css";
const SideNav = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleSubmenuClick = (submenu) => {
    setActiveSubmenu(submenu === activeSubmenu ? null : submenu);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark vertical ${
        collapsed ? "collapsed" : ""
      }`}
    >
      <button className="navbar-toggler" type="button" onClick={handleCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}>
        <div className="navbar-brand">Dashboard {/* Header Name */}</div>

        <ul className="navbar-nav mt-2 mt-lg-0 flex-column">
          {" "}
          {/* Flex column for vertical layout */}
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => handleSubmenuClick("add")}
            >
              Add <span className="sr-only">(current)</span>
            </a>
            {/* Submenu for Add options */}
            {activeSubmenu === "add" && (
              <ul className="collapse navbar-collapse show">
                {" "}
                {/* Always show submenu when active */}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Add Category
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Add Brand
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Add Model
                  </a>
                </li>
              </ul>
            )}
          </li>
          {/* Add other navigation links here */}
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
