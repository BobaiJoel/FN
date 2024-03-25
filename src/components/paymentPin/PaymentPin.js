import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { url } from "../helper/userRequest";
import { useAuthStore } from "../../store/store";
import "./PaymentPin.css";
import axios from "axios";
function PaymentPin({
  userID,
  amount,
  totalPayment,
  fee,
  recepientName,
  recepientPic,
  date,
  status,
  transactionNumber,
  paidWith,
  paymentMethod,
  sessionId,
  recipientBank,
  recipientAccountNumber,
  note,
  completionTime,
  deduction,
}) {
  axios.defaults.withCredentials = true;
  const inputsRef = useRef([]);
  const buttonRef = useRef(null);
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState({ 1: "", 2: "", 3: "", 4: "" });
  const setSuccessfulPayment = useAuthStore(
    (state) => state.setSuccessfulPayment
  );
  const setPaymentPin = useAuthStore((state) => state.setPaymentPin);
  const setDeactivated = useAuthStore((state) => state.setDeactivated);
  const newTransaction = async () => {
    const res = await axios
      .post(
        `${url()}/api/v1/transaction`,
        {
          userID: userID,
          amount: amount,
          totalPayment: totalPayment,
          fee: fee,
          recepientName: recepientName,
          recepientPic: recepientPic,
          date: date,
          status: status,
          transactionNumber: transactionNumber,
          paidWith: paidWith,
          paymentMethod: paymentMethod,
          sessionId: sessionId,
          recipientBank: recipientBank,
          recipientAccountNumber: recipientAccountNumber,
          note: note,
          completionTime: completionTime,
          deduction: deduction,
        },
        {
          withCredentials: true,
        }
      )
      .catch((err) => {
        // toast.error(err.response.data);
        console.log(err.response.data);
        console.log(err);
      });

    if (res) {
      const data = await res.data;
      return data;
    }
  };

  useEffect(() => {
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

  const sendMoney = () => {
    let goodToGo = true;
    let run = true;
    if ("65083e92d319b1e66c72e26a" === userID) {
      if ("2053" !== `${pin[1]}${pin[2]}${pin[3]}${pin[4]}`) {
        goodToGo = false;
        toast.error("Incorrect PIN Entered.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    if ("652510a678b0ebb957ccab3e" === userID) {
      if ("2616" !== `${pin[1]}${pin[2]}${pin[3]}${pin[4]}`) {
        goodToGo = false;
        toast.error("Incorrect PIN Entered.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    if ("650b86a576c3874c75859fa9" === userID) {
      if ("2348" !== `${pin[1]}${pin[2]}${pin[3]}${pin[4]}`) {
        goodToGo = false;
        toast.error("Incorrect PIN Entered.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }

    if (goodToGo) {
      setLoading(true);
      if (run) {
        setTimeout(() => {
          // Use setTimeout instead of setInterval
          if (
            "65083e92d319b1e66c72e26a" === userID ||
            "650b86a576c3874c75859fa9" === userID
          ) {
            setDeactivated(true);
            setLoading(false);
          } else {
            newTransaction().then((data) => {
              setLoading(false);
              setPaymentPin(false);
              setSuccessfulPayment(true);
              // console.log(data, " jdjjd");
              run = false;
            });
          }
        }, 3000); // Set timeout to 2000 milliseconds for a 2-second delay
      }
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
          onClick={() => setPaymentPin(false)}
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
        <h4>
          {"650b86a576c3874c75859fa9" === userID
            ? "Dear Kathleen Roeygens"
            : "Enter Payment Pin"}
        </h4>
        {"650b86a576c3874c75859fa9" === userID ? (
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              rowGap: 5,
            }}
          >
            <p>You’ve not yet generated your transaction Pin Code.</p>
            <p>
              Get text the Bank Customer Care service to generate your pin thank
              you.
            </p>
          </div>
        ) : (
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
                    style={{
                      position: "relative",
                      marginTop: 25,
                      width: "85%",
                    }}
                  >
                    <div
                      className="send-money-wrapper"
                      style={{ width: "100%" }}
                    >
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
                    style={{
                      position: "relative",
                      marginTop: 30,
                      width: "85%",
                    }}
                    onClick={sendMoney}
                  >
                    <div
                      className="send-money-wrapper"
                      style={{ width: "100%" }}
                    >
                      <div className="send-money">Send money</div>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* <button ref={buttonRef}>Verify OTP</button> */}
          </form>
        )}
      </div>
    </div>
  );
}

export default PaymentPin;
