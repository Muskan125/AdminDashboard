import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../components/Login";
import UploadBrand from "../components/UploadBrand";
import UploadCategory from "../components/UploadCategory";
import ViewBrand from "../components/ViewBrand";
import AddSubCat from "../components/AddSubCat";
import MainModel from "../components/MainModel";
import SideNav from "../components/SideNav";

function CustomRoutes() {
  // const location = useLocation();

  // const isLoginRoute = location.pathname === "/";

  return (
    <>
      {/* {!isLoginRoute && <SideNav />} */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UploadBrand" element={<UploadBrand />} />
        <Route path="/ViewBrand" element={<ViewBrand />} />
        <Route path="/UploadCategory" element={<UploadCategory />} />
        <Route path="/AddSubCat" element={<AddSubCat />} />
        <Route path="/MainModel" element={<MainModel />} />
      </Routes>
    </>
  );
}

export default CustomRoutes;
