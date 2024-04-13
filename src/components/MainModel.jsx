import React, { useState, useEffect } from "react";
import axios from "axios";

const MainModel = () => {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState([]);
  const [selectedProductType, setSelectedProdType] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCat, setSelectedSubCat] = useState("");
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [description, setDescription] = useState("");
  const [Specification, setSpecification] = useState("");
  const [Pimg, setPimg] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setPimg([...Pimg, ...files]);
  };

  const SubmitAllData = async () => {
    try {
      if (
        !productName ||
        !selectedCat ||
        !selectedSubCat ||
        !selectedBrand ||
        !selectedProductType ||
        !description ||
        !Specification ||
        !Pimg.length
      ) {
        return window.alert("Please fill all the information");
      }
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("category", selectedCat);
      formData.append("subcategory", selectedSubCat);
      formData.append("brand", selectedBrand);
      formData.append("type", selectedProductType);
      formData.append("description", description);
      formData.append("specification", Specification);

      console.log("Before map, images:", Pimg);

      // Append images to formData using map
      const imageFiles = Pimg.map((image) => {
        formData.append("Categpry Images", image);
        return image;
      });
      await axios.post("https://onestore-vert.vercel.app/addmodel", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      window.alert("Data added successfully");
      setSelectedBrand("");
      setProductName("");
      setSelectedCat("");
      setSelectedSubCat("");
      setSelectedProdType("");
      setPimg([]);
      setDescription("");
      setSpecification("");

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
        setCategories(response.data);
      } catch (error) {
        console.error("Error Fetching data: ", error);
      }
    };
    fetchCategories();
  }, []);

  //ProductType fetch
  // useEffect(() => {
  //   const fetchType = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://onestore-vert.vercel.app/product2"
  //       );
  //       setProductType(response.data);
  //     } catch (error) {
  //       console.error("Error Fetching data: ", error);
  //     }
  //   };
  //   fetchType();
  // }, []);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        if (selectedCat) {
          const response = await axios.get(
            `https://onestore-vert.vercel.app/selectedsubcategory/${selectedCat}`
          );
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
        setBrands(response.data);
      } catch (error) {
        console.error("Error Fetching data: ", error);
      }
    };
    fetchBrands();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <select
              className="form-control"
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
          <div className="col-md-4">
            <select
              className="form-control"
              value={selectedProductType}
              onChange={(e) => setSelectedProdType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="smartphone">Smartphone</option>
              <option value="laptop">Laptop</option>
              <option value="tablet">Tablet</option>
            </select>
          </div>

          <div className="col-md-4">
            <select
              className="form-control"
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
          <div className="col-md-4">
            <select
              className="form-control"
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
        </div>
        <div className="row">
          <div className="col-md-12">
            <h5>Enter Product</h5>
            <input
              type="text"
              className="form-control"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="col-md-12">
            <h5>Enter Description</h5>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="col-md-12">
            <h5>Enter Specification</h5>
            <input
              type="text"
              className="form-control"
              value={Specification}
              onChange={(e) => setSpecification(e.target.value)}
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
        <div className="row">
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={SubmitAllData}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainModel;
