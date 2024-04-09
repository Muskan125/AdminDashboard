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
import { useState } from "react";

import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

import "../allCss/Login.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <>
      <div className="Mainbody">
        <MDBContainer
          fluid
          className="p-4 background-radial-gradient overflow-hidden"
        >
          <MDBRow>
            <MDBCol
              md="6"
              className="text-center text-md-start d-flex flex-column justify-content-center"
            >
              <h1
                className="my-5 display-3 fw-bold ls-tight px-3"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>

              <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </MDBCol>

            <MDBCol md="6" className="position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <MDBCard className="my-5 bg-glass">
                <MDBCardBody className="p-5">
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First name"
                        id="form1"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last name"
                        id="form2"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="form3"
                    type="email"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form4"
                    type="password"
                  />

                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>

                  <MDBBtn className="w-100 mb-4" size="md">
                    sign up
                  </MDBBtn>

                  <div className="text-center">
                    <p>or sign up with:</p>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="facebook-f" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="twitter" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="google" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="github" size="sm" />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default Login;
