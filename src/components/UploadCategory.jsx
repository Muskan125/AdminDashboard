import React, { useState } from "react";
import axios from "axios";

const UploadCategory = () => {
  const [cat_name, setCatName] = useState("");

  const handleSubmit = async () => {
    try {
      if (!cat_name) {
        return window.alert("Please fill all the information");
      }

      const formData = new FormData();
      formData.append("name", cat_name);

      await axios.post("https://onestore-vert.vercel.app/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      window.alert("Category added successfully");
      setCatName(""); // Clear input field after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h5>Enter Category Name</h5>
          <input
            type="text"
            className="form-control"
            value={cat_name}
            onChange={(e) => setCatName(e.target.value)}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCategory;
