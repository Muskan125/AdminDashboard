import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../components/Login";
import UploadBrand from "../components/UploadBrand";
import UploadCategory from "../components/UploadCategory";
import ViewBrand from "../components/ViewBrand";
import AddSubCat from "../components/AddSubCat";
import MainModel from "../components/MainModel";
import SideNav from "../components/SideNav";
import ViewProduct from "../components/ViewProduct";
import "../allCss/CustomRoutes.css";
import Categories from "../Pages/Categories";

function CustomRoutes() {
  const location = useLocation();

  const isLoginRoute = location.pathname === "/";

  return (
    <div className="DisplayNav">
      <div className="navdiv">{!isLoginRoute && <SideNav />}</div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UploadBrand" element={<UploadBrand />} />
        <Route path="/ViewBrand" element={<ViewBrand />} />
        <Route path="/AddSubCat" element={<AddSubCat />} />
        <Route path="/MainModel" element={<MainModel />} />
        <Route path="/ViewProduct" element={<ViewProduct />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default CustomRoutes;
