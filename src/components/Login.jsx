// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const isValidPhoneNumber = phoneNumber.length === 10;

//   const handleInputChange = (event) => {
//     const inputNumber = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
//     if (inputNumber.length <= 10) {
//       setPhoneNumber(inputNumber);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (isValidPhoneNumber) {
//       // Navigate to Dashboard
//       window.location.href = "/UploadBrand"; // Assuming this is an external link
//     } else {
//       alert("Please enter a valid 10-digit number.");
//     }
//   };

//   return (
//     <>
//       {/* <div className="">
//         <div className="">
//           <h1 className="mb-4">Login</h1>
//           <form className="" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="pnumber"
//               id="pnumber"
//               className=""
//               placeholder="Enter Your Number"
//               value={phoneNumber}
//               onChange={handleInputChange}
//               pattern="[0-9]{10}"
//               title="Please enter a 10-digit number."
//               maxLength={10}
//               required
//             />
//             <button type="submit" className="" disabled={!isValidPhoneNumber}>
//               Submit
//             </button>
//           </form>
//         </div>
//       </div> */}
//     </>
//   );
// };
//https://youtu.be/SYv61aPSiOo?si=Hxm9DDYjahs2odm5
// export default Login;

//  https://onestore-vert.vercel.app/moblogin  key => mob

import React, { useState } from "react";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { useJwt } from "react-jwt";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userToken, setUserToken] = useState("");
  const handleKeyDown = (e) => {
    // Allow: backspace, delete, tab, escape, enter
    if (
      [46, 8, 9, 27, 13].includes(e.keyCode) ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && e.ctrlKey === true) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && e.ctrlKey === true) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  };

  const submitLogin = async () => {
    try {
      const { data } = await axios.post(
        "https://onestore-vert.vercel.app/moblogin",
        {
          mob: phoneNumber,
        }
      );

      if (data.token) {
        setUserToken(data.token);
        console.log("Token = ", data.token);
      } else {
        console.error("User not found or other error:", data.error);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30vw",
      }}
    >
      <MDBContainer
        className="p-2 my-4 d-flex flex-column w-100"
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "15px",
        }}
      >
        <label
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#333",
            marginBottom: "8px",
            paddingLeft: "10px",
          }}
        >
          Login to continue
        </label>

        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "10px",
              top: "7px",
              zIndex: 1,
            }}
          >
            +91
          </span>
          <MDBInput
            wrapperClass="mb-4"
            id="form2"
            type="text"
            style={{ paddingLeft: "40px" }}
            onKeyDown={handleKeyDown}
            maxLength={10}
            minLength={10}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <button
          className="mb-4"
          style={{ color: "blue", borderRadius: "15px", padding: "5px" }}
          onClick={submitLogin}
        >
          Login in
        </button>
      </MDBContainer>
    </div>
  );
};

export default Login;
