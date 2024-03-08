import React from "react";
import { Link } from "react-router-dom";
import "./verifyMe.css";
const VerifyMe = () => {
  return (
    <div className="containerV">
      <div className="verify">
        <div
          style={{
            width: "100%",
            height: 250,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",

            rowGap: 10,
            marginBottom: 20,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="350"
            height="550"
            viewBox="0 0 171 171"
          >
            <title>Asset 32</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <circle
                  cx="85.5"
                  cy="85.5"
                  r="85.5"
                  fill="rgba(240,237,255,.8)"
                />
                <circle
                  cx="85.5"
                  cy="85.5"
                  r="85.5"
                  fill="#fcfbe6"
                  fill-opacity="0.4"
                />
                <path
                  d="M85.5,159A73.5,73.5,0,1,1,159,85.5,73.62,73.62,0,0,1,85.5,159Zm0-144A70.5,70.5,0,1,0,156,85.5,70.55,70.55,0,0,0,85.5,15Z"
                  fill="#aa272f"
                />
                <path
                  d="M49.2,53.9,78.8,87a8.94,8.94,0,0,0,6.7,3,9.1,9.1,0,0,0,6.7-3l29.1-32.6a1.56,1.56,0,0,1,.8-.6,10.57,10.57,0,0,0-4-.8H52.9a10.06,10.06,0,0,0-3.9.8A.35.35,0,0,0,49.2,53.9Z"
                  fill="#aa272f"
                />
                <path
                  d="M126.5,58a1.8,1.8,0,0,1-.6.9l-29,32.5a15.38,15.38,0,0,1-11.4,5.1,15.18,15.18,0,0,1-11.4-5.1l-29.5-33-.2-.2A9.75,9.75,0,0,0,43,63.3v44.8A9.94,9.94,0,0,0,53,118h65a9.94,9.94,0,0,0,10-9.9V63.3a10.27,10.27,0,0,0-1.5-5.3"
                  fill="#aa272f"
                />
              </g>
            </g>
          </svg>
          <h2 style={{ padding: 0 }}>Welcome Back!</h2>
          <p style={{ textAlign: "center" }}>
            Once verified, the next time you log in, you will be required to
            enter the verification code.
          </p>
        </div>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            flexDirection: "column",
            rowGap: 10,
          }}
        >
          <h2 style={{ padding: 0 }}>Help us verify your identity</h2>
          <p class="please">Please verify your identity with your email👇🏽</p>
          <b style={{ fontFamily: "cursive" }}>*****@gmail.com</b>
        </div>
        <div
          style={{
            width: "100%",
            height: 250,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Link to="/OtpVerification" className="button3V" id="">
            Procced {/* Procced <img width="19" src="images/next.ico" /> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyMe;
