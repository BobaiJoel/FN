import React, { useEffect, useState, useRef } from "react";
import { useAuthStore } from "./../../store/store";
import { newIdOTP } from "../helper/userEmailverificztion";
import { toast } from "react-toastify";
import { MLogin } from "../helper/userRequest";
import { useNavigate } from "react-router-dom";
const OtpVerification = () => {
  const moveTo = useNavigate();
  const inputsRef = useRef([]);
  const buttonRef = useRef(null);
  const [counter, setCounter] = useState(25);
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const [pin, setPin] = useState({ 1: "", 2: "", 3: "", 4: "" });
  const setUser = useAuthStore((state) => state.setUser);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  let pass = useAuthStore((state) => {
    return state.auth.pass;
  });
  let email = useAuthStore((state) => {
    return state.auth.email;
  });

  useEffect(() => {
    console.log(pass, email);
    const inputs = inputsRef.current;
    const button = buttonRef.current;

    inputs.forEach((input, index1) => {
      input.addEventListener("keyup", (e) => {
        const currentInput = input;
        const nextInput = input.nextElementSibling;
        const prevInput = input.previousElementSibling;

        if (currentInput.value.length > 1) {
          currentInput.value = "";
          return;
        }

        if (
          nextInput &&
          nextInput.hasAttribute("disabled") &&
          currentInput.value !== ""
        ) {
          nextInput.removeAttribute("disabled");
          nextInput.focus();
        }

        if (e.key === "Backspace") {
          inputs.forEach((input, index2) => {
            if (index1 <= index2 && prevInput) {
              input.setAttribute("disabled", true);
              input.value = "";
              prevInput.focus();
            }
          });
        }

        if (!inputs[3].disabled && inputs[3].value !== "") {
          setShowBtn(true);
          return;
        }
        setShowBtn(false);
      });
    });

    window.addEventListener("load", () => inputs[0].focus());
  }, [inputsRef, buttonRef]);

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      document.getElementById("resend").style.display = "none";
      document.getElementById("diV").style.display = "block";
      intervalId = setInterval(() => {
        setCounter((prevCounter) => {
          const newCounter = prevCounter - 1;

          if (newCounter === 0) {
            setIsRunning(false);
            document.getElementById("resend").style.display = "block";
            document.getElementById("diV").style.display = "none";
          }

          return newCounter;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleFormSubmit = async () => {
    setCounter(26);
    setIsRunning((isRunning) => !isRunning);
    // using an HTTP request
    let ans = await newIdOTP(email);
    let Status = String(ans.status);
    console.log(Status);
    if (Status === "200") {
      toast.success("Mail Sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const submitOtp = async () => {
    let ans = await MLogin({
      email: email,
      password: pass,
      otp: `${pin[1] + pin[2] + pin[3] + pin[4]}`,
    });
    let Status = String(ans?.status);
    //console.log(Status);
    console.log(Status);
    if (Status === "200") {
      console.log(ans?.data);

      //   window.location.reload();

      setUser(ans?.data);
      setIsLoggedIn(true);
      // console.log(ans.data);
      moveTo("/login");
    }
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#000",
        position: "absolute",
        zIndex: 1,
        background: "rgb(0 0 0 / 58%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="red"
          viewBox="0 0 256 256"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            cursor: "pointer",
          }}
          // onClick={() => setPaymentPin(false)}
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
        </svg>
        <header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 255, 255, 1)" }}
          >
            <path d="M11.488 21.754c.294.157.663.156.957-.001 8.012-4.304 8.581-12.713 8.574-15.104a.988.988 0 0 0-.596-.903l-8.05-3.566a1.005 1.005 0 0 0-.813.001L3.566 5.747a.99.99 0 0 0-.592.892c-.034 2.379.445 10.806 8.514 15.115zM8.674 10.293l2.293 2.293 4.293-4.293 1.414 1.414-5.707 5.707-3.707-3.707 1.414-1.414z"></path>
          </svg>
        </header>
        <h4>Enter Identity Code</h4>
        <p className="please" style={{ padding: 0 }}>
          Please verify your identity using the code sent to your email.
        </p>
        <form action="#">
          <div className="input-field12">
            <input
              type="number"
              style={{
                width: 45,
                height: 35,
                outlineColor: "#aa272f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
              }}
              ref={(el) => (inputsRef.current[0] = el)}
              onChange={(event) => {
                setPin({ ...pin, 1: event.target.value });
              }}
              //  value={pin.[]}
            />
            <input
              type="number"
              style={{
                width: 45,
                height: 35,
                outlineColor: "#aa272f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
              }}
              disabled
              ref={(el) => (inputsRef.current[1] = el)}
              onChange={(event) => {
                setPin({ ...pin, 2: event.target.value });
              }}
            />
            <input
              type="number"
              style={{
                width: 45,
                height: 35,
                outlineColor: "#aa272f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
              }}
              disabled
              ref={(el) => (inputsRef.current[2] = el)}
              onChange={(event) => {
                setPin({ ...pin, 3: event.target.value });
              }}
            />
            <input
              type="number"
              style={{
                width: 45,
                height: 35,
                outlineColor: "#aa272f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
              }}
              disabled
              ref={(el) => (inputsRef.current[3] = el)}
              onChange={(event) => {
                setPin({ ...pin, 4: event.target.value });
              }}
            />
          </div>
          {showBtn && (
            <>
              {loading ? (
                <div
                  ref={buttonRef}
                  className="frame-parent3"
                  style={{ position: "relative", marginTop: 25, width: "85%" }}
                >
                  <div className="send-money-wrapper" style={{ width: "100%" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#fff"
                      viewBox="0 0 256 256"
                      className="rotate-45"
                    >
                      <path d="M236,128a108,108,0,0,1-216,0c0-42.52,24.73-81.34,63-98.9A12,12,0,1,1,93,50.91C63.24,64.57,44,94.83,44,128a84,84,0,0,0,168,0c0-33.17-19.24-63.43-49-77.09A12,12,0,1,1,173,29.1C211.27,46.66,236,85.48,236,128Z"></path>
                    </svg>
                  </div>
                </div>
              ) : (
                <div
                  ref={buttonRef}
                  className="frame-parent3"
                  style={{ position: "relative", marginTop: 30, width: "85%" }}
                  onClick={submitOtp}
                >
                  <div className="send-money-wrapper" style={{ width: "100%" }}>
                    <div className="send-money">Verify</div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* <button ref={buttonRef}>Verify OTP</button> */}
        </form>
        <form>
          <p className="dont" style={{ display: "flex" }}>
            Didn't receive the email?
            <input
              type="button"
              value=" resend"
              onClick={handleFormSubmit}
              className="pass"
              style={{ color: "#aa272f" }}
              id="resend"
            />
          </p>
        </form>
        <div id="diV">
          In <b id="number">{counter}</b> second(s)
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
