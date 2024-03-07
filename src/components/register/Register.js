import React from "react";
import useMediaQuery from "../useMediaQuery";
import RectangleIcon from "../login/RectangleIcon";
import InputComponent from "./InputComponent";
import "./Register.css";
const Register = () => {
  const side = useMediaQuery("(min-width: 1086px)");
  return (
    <div className="login">
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InputComponent />
      </div>
      {side && (
        <div style={{ width: "50%", height: "100%" }}>
          {/* <div className="login-child" /> */}
          <div
            style={{
              position: "relative",
              backgroundImage: "url('undefined.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RectangleIcon />

            <div className="login-item">
              <div className="frame-childOne">
                <img
                  className="thunderbolt-1-icon"
                  alt=""
                  src="/undefined2.png"
                />
              </div>
              <b className="pay-bills-transfer">
                Pay bills, transfer money, deposit checks, and more — all for
                you
              </b>
              <img className="women-with-tab-1" alt="" src="/undefined1.png" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
