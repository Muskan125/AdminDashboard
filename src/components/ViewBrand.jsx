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
        {brands.map((brand) => (
          <div key={brand._id}>
            <h3>{brand.brandName}</h3>

            {brand.brandImage ? (
              <div>
                <img
                  src={`https://onestore-vert.vercel.app/${brand.brandImage}`}
                  alt={`brand image`}
                  className=""
                />
              </div>
            ) : (
              <div>No image found</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewBrand;
