import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewProduct = () => {
  const [brands, setBrands] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(
          "https://onestore-vert.vercel.app/brands"
        );
        setBrands(response.data);
      } catch (error) {
        console.error("Error Fetching brands data: ", error);
      }
    };

    const fetchSubCategories = async () => {
      try {
        const response = await axios.get(
          "https://onestore-vert.vercel.app/selectedsubcategory/"
        );
        setSubCategories(response.data);
      } catch (error) {
        console.error("Error Fetching subcategories data: ", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://onestore-vert.vercel.app/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error Fetching categories data: ", error);
      }
    };

    fetchBrands();
    fetchSubCategories();
    fetchCategories();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div>
          <h2>Product Details</h2>
        </div>
        <br />
        <h4>Categories</h4>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Category ID</th>
              <th scope="col">Category Name</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat._id}>
                <td>{cat._id}</td>
                <td>{cat.categoryName}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4>Subcategories</h4>
        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">Subcategory ID</th>
              <th scope="col">Subcategory Name</th>
            </tr>
          </thead>
          <tbody>
            {subCategories.map((subcat) => (
              <tr key={subcat._id}>
                <td>{subcat._id}</td>
                <td>{subcat.subCategoryName}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4>Brands</h4>
        <div className="row">
          {brands.map((brand) => (
            <div key={brand._id} className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{brand.brandName}</h5>
                  {brand.brandImage ? (
                    <img
                      src={`https://onestore-vert.vercel.app/${brand.brandImage}`}
                      alt={`Brand ${brand.brandName} image`}
                      className="card-img-top"
                      style={{ maxHeight: "120px", objectFit: "contain" }}
                    />
                  ) : (
                    <div className="text-muted">No image found</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
