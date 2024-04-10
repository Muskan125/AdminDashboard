import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <li className="nav-item">
            <Link
              to="#"
              className="nav-link"
              onClick={() => handleSubmenuClick("add")}
            >
              Add
            </Link>

            {activeSubmenu === "add" && (
              <ul className="collapse navbar-collapse show">
                <li className="nav-item">
                  <Link to="./UploadCategory" className="nav-link">
                    Add Category
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./UploadBrand" className="nav-link">
                    Add Brand
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./MainModel" className="nav-link">
                    Add Model
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./AddsubCat" className="nav-link">
                    Add Subcategory
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <Link
              to="#"
              className="nav-link"
              onClick={() => handleSubmenuClick("view")}
            >
              View
            </Link>

            {activeSubmenu === "view" && (
              <ul className="collapse navbar-collapse show">
                <li className="nav-item">
                  <Link to="./ViewCategory" className="nav-link">
                    View Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./ViewBrand" className="nav-link">
                    View Brands
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./ViewProduct" className="nav-link">
                    View Products
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <Link
              to="#"
              className="nav-link"
              onClick={() => handleSubmenuClick("Update")}
            >
              Update
            </Link>

            {activeSubmenu === "Update" && (
              <ul className="collapse navbar-collapse show">
                <li className="nav-item">
                  <Link to="./UpdateCategory" className="nav-link">
                    Update Categories
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="./ViewBrand" className="nav-link">
                    View Brands
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./ViewProduct" className="nav-link">
                    View Products
                  </Link>
                </li> */}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
