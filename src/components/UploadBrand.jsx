import React, { useState } from "react";
import axios from "axios";
import SideNav from "./SideNav";

const UplaodBrand = () => {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    try {
      if (!name) {
        return window.alert("Please fill all the information");
      }

      const formData = new FormData();
      formData.append("name", name);

      await axios.post("https://onestore-vert.vercel.app/brand", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      window.alert("Data added successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container flex justify-start align-start">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <div className="mt-3">
            <h5>Brand Name</h5>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Upload Brand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UplaodBrand;
