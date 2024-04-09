import React, { useState, useEffect } from "react";
import axios from "axios";

const MainModel = () => {
  const [productName, setProductName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCat, setSelectedSubCat] = useState("");
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const SubmitAllData = async () => {
    try {
      if (!productName || !selectedCat || !selectedSubCat || !selectedBrand) {
        return window.alert("Please fill all the information");
      }
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("category", selectedCat);
      formData.append("subcategory", selectedSubCat);
      formData.append("brand", selectedBrand);

      await axios.post("https://onestore-vert.vercel.app/model", formData, {
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://onestore-vert.vercel.app/categories"
        );
        console.log(response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error Fetching data: ", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        if (selectedCat) {
          const response = await axios.get(
            `https://onestore-vert.vercel.app/selectedsubcategory/${selectedCat}`
          );
          console.log(response.data);
          setSubCategories(response.data);
        }
      } catch (error) {
        console.error("Error Fetching data: ", error);
      }
    };
    fetchSubCategories();
  }, [selectedCat]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(
          "https://onestore-vert.vercel.app/brands"
        );
        console.log(response.data);
        setBrands(response.data);
      } catch (error) {
        console.error("Error Fetching data: ", error);
      }
    };
    fetchBrands();
  }, []);

  return (
    <>
      <div>
        <select
          value={selectedCat}
          onChange={(e) => setSelectedCat(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.categoryName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          value={selectedSubCat}
          onChange={(e) => setSelectedSubCat(e.target.value)}
        >
          <option value="">Select Subcategory</option>
          {subCategories.map((subcat) => (
            <option key={subcat._id} value={subcat._id}>
              {subcat.subCategoryName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">Select Brands</option>
          {brands.map((brand) => (
            <option key={brand._id} value={brand._id}>
              {brand.brandName}
            </option>
          ))}
        </select>
      </div>

      <div className="">
        <h5>Enter Product</h5>
        <input
          type="text"
          className=""
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      <div>
        <input
          type="button"
          value="Upload"
          className=""
          onClick={SubmitAllData}
        />
      </div>
    </>
  );
};

export default MainModel;
