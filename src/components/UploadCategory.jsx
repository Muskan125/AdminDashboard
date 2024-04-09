import React, { useState } from "react";
import axios from "axios";

const UploadCategory = () => {
  const [cat_name, setCat] = useState("");

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

      window.alert("Data added successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="">
        <h5>Enter Category</h5>
        <input
          type="text"
          className=""
          value={cat_name}
          onChange={(e) => setCat(e.target.value)}
        />
      </div>

      <div>
        <input
          type="button"
          value="Upload"
          className=""
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default UploadCategory;
