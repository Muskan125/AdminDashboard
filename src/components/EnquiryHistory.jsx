import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
const EnquiryHistory = () => {
  const [enquiry, setEnquiry] = useState([]);
  useEffect(() => {
    const fetchEnquiry = async () => {
      try {
        const response = await axios.get(
          "https://onestore-vert.vercel.app/inquiries"
        );
        setEnquiry(response.data);
        console.log("Enquiry History :", enquiry);
      } catch (error) {
        console.error("Error Fetching data: ", error);
      }
    };
    fetchEnquiry();
  }, []);

  return (
    <>
      <div>
        <h2>Enquiry History</h2>
        <Table striped bordered hover>
          {" "}
          <thead>
            <tr>
              <th>Date Time</th>
              <th>Product Name</th>
              <th>Shop Name</th>
              <th>Shop Number</th>
              <th>Customer Name</th>
              <th>Customer Number</th>
            </tr>
          </thead>
          <tbody>
            {enquiry.map((enquiryItem) => (
              <tr key={enquiryItem._id}>
                <td>{enquiryItem.date}</td>
                <td>{enquiryItem.product.productName}</td>
                <td>{enquiryItem.shop.shopName}</td>
                <td>{enquiryItem.shop.shopNumber}</td>
                <td>{enquiryItem.customer.customerName}</td>
                <td>{enquiryItem.customer.customerNumber}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default EnquiryHistory;
