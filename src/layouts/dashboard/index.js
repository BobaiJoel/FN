import React, { useState } from "react";
import success from "./Success Icon.svg";
import { toast } from "react-toastify";
import Header from "../../components/navbar/Header";
import PaymentPin from "../../components/paymentPin/PaymentPin";
//import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/store";
import { Outlet } from "react-router-dom";
import "./index.css";
import axios from "axios";
const DashboardLayout = () => {
  axios.defaults.withCredentials = true;
  const setConfirmDetails = useAuthStore((state) => state.setConfirmDetails);
  // const [deactivated, setDeactivated] = useState(true);

  // const [ranOnce, setRanOnce] = useState(true);
  const now = new Date();
  const currentTime = new Intl.DateTimeFormat(undefined, {
    timeStyle: "medium",
  }).format(now);
  const money = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
  });
  const [inputs, setInputs] = useState({
    amount: 0,
    remark: "",
  });
  const handleInputChange = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  let user = useAuthStore((state) => {
    return state.auth.user;
  });
  let total = 100 + Number(inputs.amount);
  let all = Number(user?.myBalance) - total;
  // Receipt
  let paymentAmount = useAuthStore((state) => {
    return state.auth.paymentAmount;
  });
  let recepientPic = useAuthStore((state) => {
    return state.auth.recepientPic;
  });
  let fee = useAuthStore((state) => {
    return state.auth.fee;
  });
  let totalPayment = useAuthStore((state) => {
    return state.auth.totalPayment;
  });
  let paymentStatus = useAuthStore((state) => {
    return state.auth.paymentStatus;
  });
  let recepientName = useAuthStore((state) => {
    return state.auth.recepientName;
  });
  let recipientBank = useAuthStore((state) => {
    return state.auth.recipientBank;
  });
  let recipientAccountNumber = useAuthStore((state) => {
    return state.auth.recipientAccountNumber;
  });
  let date = useAuthStore((state) => {
    return state.auth.date;
  });
  let paymentMethod = useAuthStore((state) => {
    return state.auth.paymentMethod;
  });
  let paidWith = useAuthStore((state) => {
    return state.auth.paidWith;
  });
  let remark = useAuthStore((state) => {
    return state.auth.remark;
  });
  let sessionID = useAuthStore((state) => {
    return state.auth.sessionID;
  });
  let transactionNumber = useAuthStore((state) => {
    return state.auth.transactionNumber;
  });
  //
  let confirmDetails = useAuthStore((state) => {
    return state.auth.confirmDetails;
  });
  const setAmount = useAuthStore((state) => state.setAmount);
  let amount = useAuthStore((state) => {
    return state.auth.amount;
  });
  const setSuccessfulPayment = useAuthStore(
    (state) => state.setSuccessfulPayment
  );
  const setPaymentPin = useAuthStore((state) => state.setPaymentPin);
  let successfulPayment = useAuthStore((state) => {
    return state.auth.successfulPayment;
  });
  let paymentPin = useAuthStore((state) => {
    return state.auth.paymentPin;
  });
  let deactivated = useAuthStore((state) => {
    return state.auth.deactivated;
  });

  // f1
  const confirmDetail = () => {
    setConfirmDetails(false);
    setAmount(true);
  };
  const setPaymentAmount = useAuthStore((state) => state.setPaymentAmount);
  const setDeactivated = useAuthStore((state) => state.setDeactivated);
  const setFee = useAuthStore((state) => state.setFee);
  const setTotalPayment = useAuthStore((state) => state.setTotalPayment);
  const setRemark = useAuthStore((state) => state.setRemark);

  const sendMoney = () => {
    let goodToGo = true;

    if (!inputs.amount) {
      goodToGo = false;
      toast.error("Please Enter Amount", {
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
    if (inputs.amount < 10) {
      goodToGo = false;
      toast.error("Amount must be above $ 10.00", {
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
    if (inputs.amount > user.myBalance) {
      goodToGo = false;
      toast.error("Your balance is insufficient.", {
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

    if (goodToGo) {
      setPaymentAmount(inputs.amount);
      setFee(100);
      setTotalPayment(100 + Number(inputs.amount));
      setRemark(inputs.remark);
      setAmount(false);
      setPaymentPin(true);
    }
  };
  return (
    <div className="finance-dashboard">
      {confirmDetails && (
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
          <div
            style={{
              height: "65%",
              width: 400,
              backgroundColor: "#fff",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              position: "relative",
              margin: 10,
            }}
          >
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
              onClick={() => setConfirmDetails(false)}
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
            <div className="my-card">Confirm Details</div>
            <div style={{ width: "85%" }}>
              <div
                className="my-card"
                style={{ fontSize: 13, color: "var(--color-darkgray-100)" }}
              >
                <span style={{ color: "#ffd800" }}>⚠</span> Kindly review the
                transfer details before proceeding, as successfull transfers
                cannot be reversed.
              </div>
            </div>
            <div
              style={{
                width: "85%",
                height: 150,
                backgroundColor: "rgb(245, 246, 250)",
                borderRadius: 20,
                padding: 10,
                paddingTop: 20,
                paddingBottom: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                rowGap: 20,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: 13 }}>Bank</p>
                <div>
                  <div
                    className="my-card"
                    style={{
                      fontSize: 13,
                      color: "#aa272f",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {recipientBank}
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: 13 }}>Account Number</p>
                <div>
                  <div
                    className="my-card"
                    style={{
                      fontSize: 13,
                      color: "#aa272f",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {recipientAccountNumber}
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: 13 }}>Verified Name</p>
                <div>
                  <div
                    className="my-card"
                    style={{
                      fontSize: 13,
                      color: "#aa272f",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {recepientName}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="frame-parent3"
              style={{ position: "relative", marginTop: 30, width: "85%" }}
            >
              <div
                onClick={confirmDetail}
                className="send-money-wrapper"
                style={{ width: "100%" }}
              >
                <div className="send-money">Send money</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {amount && (
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
          <div
            style={{
              height: "65%",
              width: 400,
              backgroundColor: "#fff",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              position: "relative",
              margin: 10,
            }}
          >
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
              onClick={() => setAmount(false)}
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
            <div
              className="avatar"
              style={{ height: 100, width: 100, marginBottom: 10 }}
            >
              <img
                src={recepientPic}
                alt="logo"
                style={{ display: "block", width: "100%" }}
              />
            </div>
            <div className="my-card" style={{ margin: 5, padding: 0 }}>
              {recepientName}
            </div>
            <div
              className="my-card"
              style={{
                margin: 0,
                padding: 0,
                fontSize: 13,
                color: "var(--color-darkgray-100)",
                marginBottom: 5,
              }}
            >
              {`${recipientBank}(${recipientAccountNumber})`}
            </div>
            <div style={{ width: "85%", marginBottom: 10 }}>
              <p style={{ fontSize: 13, marginBottom: 5 }}>Amount</p>
              <div
                style={{
                  width: "100%",
                  height: 45,
                  backgroundColor: "rgb(245, 246, 250)",
                  border: "1px solid #aa272f",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 10,
                }}
              >
                <p style={{ fontSize: 15, fontWeight: "600" }}>$</p>
                <input
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "none",
                    backgroundColor: "transparent",
                    paddingLeft: 10,
                    outline: "none",
                  }}
                  onChange={handleInputChange}
                  value={inputs.amount}
                  name="amount"
                  type="number"
                  placeholder="100.00-5,000,000.00"
                />
              </div>
            </div>
            <div style={{ width: "85%" }}>
              <p style={{ fontSize: 13 }}>Remark</p>
              <div
                style={{
                  width: "100%",
                  height: 45,
                  backgroundColor: "rgb(245, 246, 250)",
                  // border: "1px solid #aa272f",
                  borderRadius: 10,
                }}
              >
                <input
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "none",
                    backgroundColor: "transparent",
                    paddingLeft: 10,
                    outline: "none",
                  }}
                  onChange={handleInputChange}
                  value={inputs.remark}
                  name="remark"
                  type="text"
                  placeholder="What's this for? (Optional)"
                />
              </div>
            </div>

            <div
              className="frame-parent3"
              style={{ position: "relative", marginTop: 30, width: "85%" }}
              onClick={sendMoney}
            >
              <div className="send-money-wrapper" style={{ width: "100%" }}>
                <div className="send-money">Pay</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {paymentPin && (
        <PaymentPin
          userID={user._id}
          amount={Number(inputs.amount)}
          totalPayment={100 + Number(inputs.amount)}
          fee={100}
          recepientName={recepientName}
          recepientPic={recepientPic}
          date={date}
          status={paymentStatus}
          transactionNumber={transactionNumber}
          paidWith={paidWith}
          paymentMethod={paymentMethod}
          sessionId={sessionID}
          recipientBank={recipientBank}
          recipientAccountNumber={recipientAccountNumber}
          note={inputs.remark}
          completionTime={currentTime}
          deduction={all}
        />
      )}
      {successfulPayment && (
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
          <div
            style={{
              height: "90%",
              width: 400,
              backgroundColor: "#fff",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              position: "relative",
              margin: 10,
            }}
          >
            {/* H */}
            <div
              style={{
                width: "100%",
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                flexDirection: "column",
                paddingTop: 10,
                rowGap: 5,
                // background: "blue",
              }}
            >
              <img src={success} alt="" />
              <div className="my-card" style={{ padding: 0, margin: 0 }}>
                Payment Success!
              </div>

              <div
                className="my-card"
                style={{
                  fontSize: 12,
                  color: "rgba(71, 71, 71, 1)",
                  padding: 0,
                  margin: 0,
                  fontWeight: "500",
                  marginBottom: 10,
                }}
              >
                Your payment has been successfully done.
              </div>
            </div>
            {/* B */}
            <div
              style={{
                width: "100%",
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                overflow: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "90%",
                  padding: 20,
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  borderRadius: 16,
                  background: "#F7F9FA",
                }}
              >
                {/* 1 */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>Amount</p>
                  <div>
                    <div
                      className="my-card"
                      style={{
                        fontSize: 13,
                        color: "#121212",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {money.format(paymentAmount)}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>Fee</p>
                  <div>
                    <div
                      className="my-card"
                      style={{
                        fontSize: 10,
                        color: "#121212",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {money.format(fee)}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>
                    Total Payment
                  </p>
                  <div>
                    <div
                      className="my-card"
                      style={{
                        fontSize: 10,
                        color: "#121212",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {money.format(totalPayment)}
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>
                    Payment Status
                  </p>
                  <button
                    style={{
                      padding: "4px 10px 4px 10px",
                      backgroundColor: "rgba(35, 162, 109, 0.12)", // "#FFF5DA"
                      border: "none",
                      borderRadius: "var(--br-xs)",
                      fontSize: 7,
                      fontWeight: 600,
                      fontFamily: "var(--font-poppins)",
                      color: "rgba(35, 162, 109, 1)", //"#FED04A"
                    }}
                  >
                    <h4>{paymentStatus}</h4>
                  </button>
                </div>
                <div className="line"></div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>
                    Recepient Name
                  </p>
                  <div>
                    <div
                      className="my-card"
                      style={{
                        fontSize: 10,
                        color: "#121212",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {recepientName}
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>
                    Recipient Bank
                  </p>
                  <div>
                    <div
                      className="my-card"
                      style={{
                        fontSize: 10,
                        color: "#121212",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {recipientBank}
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>
                    Recipient Account Number
                  </p>
                  <div>
                    <div
                      className="my-card"
                      style={{
                        fontSize: 10,
                        color: "#121212",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {recipientAccountNumber}
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>Date</p>
                  <div>
                    <div
                      className="my-card"
                      style={{
                        fontSize: 10,
                        color: "#121212",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {date}
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>
                    Payment Method
                  </p>
                  <div>
                    <div
                      className="my-card"
                      style={{
                        fontSize: 10,
                        color: "#121212",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {paymentMethod}
                    </div>
                  </div>
                </div>
                {/* 9 */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>Paid With</p>
                  <div>
                    <div
                      className="my-card"
                      style={{
                        fontSize: 10,
                        color: "#121212",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {paidWith}
                    </div>
                  </div>
                </div>
                {/* 9 */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>RemarK</p>
                  <div>
                    <div
                      className="my-card"
                      style={{
                        fontSize: 10,
                        color: "#121212",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {remark}
                    </div>
                  </div>
                </div>
                {/* 9 */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>Session ID</p>
                  <div>
                    <div
                      className="my-card"
                      style={{
                        fontSize: 10,
                        color: "#121212",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {sessionID}
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: 10, color: "#4B4E52" }}>
                    Transaction Number
                  </p>
                  <div>
                    <div
                      className="my-card"
                      style={{
                        fontSize: 10,
                        color: "#121212",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {transactionNumber}
                    </div>
                  </div>
                </div>
                {/* 3 */}
              </div>
            </div>
            {/* F */}
            <div
              className="frame-parent3"
              style={{
                position: "relative",
                marginBottom: 15,
                width: "85%",
                marginTop: 10,
              }}
              onClick={() => setSuccessfulPayment(false)}
            >
              <div className="send-money-wrapper" style={{ width: "100%" }}>
                <div className="send-money">Done</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {deactivated && (
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
          <div
            style={{
              height: "65%",
              width: 400,
              backgroundColor: "#fff",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              position: "relative",
              margin: 10,
            }}
          >
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
              onClick={() => setDeactivated(false)}
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
            <div className="my-card" style={{ width: "80%" }}>
              Your Account Has Been Temporarily Locked
            </div>
            <div style={{ width: "85%" }}>
              <div
                className="my-card"
                style={{ fontSize: 13, color: "var(--color-darkgray-100)" }}
              >
                <span style={{ color: "#ffd800" }}>⚠</span> Dear valued
                customer, we have temporarily suspended your account due to the
                detection of multiple devices and transactions from an
                unfamiliar location. To resolve this issue, kindly visit one of
                our branches with your valid identification, or get in touch
                with us at{" "}
                <a
                  href="mailto:customer@plainscapitalbk.com"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  customer@plainscapitalbk.com
                </a>{" "}
                for further assistance, Your security is important to us at
                plains capital bank.
              </div>
            </div>
            {/* <div
              style={{
                width: "85%",
                height: 150,
                backgroundColor: "rgb(245, 246, 250)",
                borderRadius: 20,
                padding: 10,
                paddingTop: 20,
                paddingBottom: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                rowGap: 20,
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: 13 }}>Bank</p>
                <div>
                  <div
                    className="my-card"
                    style={{
                      fontSize: 13,
                      color: "#aa272f",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {recipientBank}
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: 13 }}>Account Number</p>
                <div>
                  <div
                    className="my-card"
                    style={{
                      fontSize: 13,
                      color: "#aa272f",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {recipientAccountNumber}
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ fontSize: 13 }}>Verified Name</p>
                <div>
                  <div
                    className="my-card"
                    style={{
                      fontSize: 13,
                      color: "#aa272f",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {recepientName}
                  </div>
                </div>
              </div>
            </div> */}
            <div
              className="frame-parent3"
              style={{ position: "relative", marginTop: 30, width: "85%" }}
            >
              <div
                //  onClick={confirmDetail}
                className="send-money-wrapper"
                style={{ width: "100%" }}
              >
                <div className="send-money">
                  <a
                    href="mailto:contact@plainscapitalbk.com"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {user?._id === "65083e92d319b1e66c72e26aQ" ? <></> : <Header />}
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
