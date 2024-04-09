import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewBrand = () => {
  const [brands, setBrands] = useState([]);

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
    <div className="container">
      <div className="row">
        {brands.map((brand) => (
          <div key={brand._id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{brand.brandName}</h5>
                {brand.brandImage ? (
                  <img
                    src={`https://onestore-vert.vercel.app/${brand.brandImage}`}
                    alt={`Brand ${brand.brandName} image`}
                    className="card-img-top"
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
  );
};

export default ViewBrand;
