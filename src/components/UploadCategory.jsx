import React, { useState } from "react";
import axios from "axios";

const UploadCategory = () => {
  const [cat_name, setCatName] = useState("");
  const [Catimg, setCatimg] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setCatimg([...Catimg, ...files]);
  };

  const handleSubmit = async () => {
    try {
      console.log("Categories Images:", Catimg);
      if (!cat_name || !Catimg.length) {
        return window.alert("Please fill all the information");
      }

      const formData = new FormData();
      formData.append("name", cat_name);

      console.log("Before map, images:", Catimg);

      // Append images to formData using map
      const imageFiles = Catimg.map((image) => {
        formData.append("Categpry Images", image);
        return image;
      });

      await axios.post("https://onestore-vert.vercel.app/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      window.alert("Category added successfully");
      setCatName(""); // Clear input field after successful submission
      setCatimg([]);
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="container mt-5">
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
            <h5>Upload Category Images</h5>
            <input
              type="file"
              className="form-control"
              accept="image/jpeg, image/png"
              multiple
              onChange={handleImageChange}
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
    </>
  );
};

export default UploadCategory;
