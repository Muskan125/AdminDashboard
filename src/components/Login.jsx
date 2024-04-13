//  https://onestore-vert.vercel.app/moblogin  key => mob

import React, { useState } from "react";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
//import { useJwt } from "react-jwt";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../allCss/Login.css";
import login from "../assets/login.png";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();
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
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        console.log("Token = ", data.token);
        navigate("/Categories");
      } else {
        console.error("User not found or other error:", data.error);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <body>
        <div className="left-img-div">
          <div className="img-div">
            <img src={login} alt="Login Img" />
          </div>
        </div>
        <div className="login-div">
          <div className=" login-div-box">
            <MDBContainer
              className="p-4  d-flex flex-column w-100 "
              style={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "15px",
                height: "30vh",
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
                  placeholder="Enter Your Number"
                  onKeyDown={handleKeyDown}
                  maxLength={10}
                  minLength={10}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <button
                className="mb-3"
                style={{
                  color: "white",
                  borderRadius: "5px",
                  padding: "5px",
                  backgroundColor: "#438eff",
                  fontWeight: "500",
                }}
                onClick={submitLogin}
              >
                Login
              </button>
            </MDBContainer>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
