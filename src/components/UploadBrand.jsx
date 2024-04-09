import React, { useState } from "react";
import axios from "axios";
import SideNav from "./SideNav";

const UplaodBrand = () => {
  const [name, setName] = useState("");
  //const [bimages, setImages] = useState([]);

  /*const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => reject(error);
    });
*/
  /*const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    const base64Images = await Promise.all(files.map(toBase64));
    setImages(base64Images);
  };
*/
  const handleSubmit = async () => {
    try {
      if (!name /*|| !bimages.length*/) {
        return window.alert("Please fill all the information");
      }

      const formData = new FormData();
      formData.append("name", name); // Sending the brand name as 'model'

      /*bimages.forEach((image) => {
        formData.append("photos", image); // Sending the images as 'photos'
      });*/

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
    <div className="flex">
      <SideNav />
      <div className="">
        <div className="">
          <h5> Brand Name</h5>
          <input
            type="text"
            className=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* <div>
        <input
          type="file"
          accept="image/jpeg, image/png"
          multiple
          onChange={handleImageChange}
        />
      </div> */}

        {/* <div>
        {/* Map over bimages to render each image 
        {bimages.map((image, index) => (
          <img key={index} src={image} alt="" className="h-24 w-52" />
        ))}
      </div>  */}

        <div>
          <input
            type="button"
            value="Upload Brand"
            className=""
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default UplaodBrand;
