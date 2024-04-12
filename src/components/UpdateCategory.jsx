import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [editedCategoryName, setEditedCategoryName] = useState({});

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

  const handleCategoryUpdate = async (categoryId, newName) => {
    try {
      if (!newName) {
        return window.alert("Please fill all the information");
      }

      const formData = new FormData();
      formData.append("name", newName);

      await axios.post(
        `https://onestore-vert.vercel.app/category/${categoryId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      window.alert("Category updated successfully");
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const handleCategoryDelete = async (categoryId) => {
    try {
      await axios.delete(
        `https://onestore-vert.vercel.app/category/${categoryId}`
      );

      // Update the local state to remove the deleted category
      setCategories((prevCategories) =>
        prevCategories.filter((cat) => cat._id !== categoryId)
      );

      window.alert("Category deleted successfully");
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleSubmit = async (categoryId) => {
    try {
      const newName = editedCategoryName[categoryId];
      if (!newName) {
        return window.alert("Please fill all the information");
      }

      await handleCategoryUpdate(categoryId, newName);

      window.alert("Category updated successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h4>Update Categories</h4>
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">Category ID</th>
            <th scope="col">Category Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat._id}>
              <td>{cat._id}</td>
              <td>
                <input
                  type="text"
                  value={editedCategoryName[cat._id] || cat.categoryName}
                  onChange={(e) => {
                    setEditedCategoryName((prevNames) => ({
                      ...prevNames,
                      [cat._id]: e.target.value,
                    }));
                  }}
                />
              </td>
              <td>
                <button onClick={() => handleSubmit(cat._id)}>Update</button>
                <button onClick={() => handleCategoryDelete(cat._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateCategory;
