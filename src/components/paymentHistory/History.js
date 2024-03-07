import React, { useState } from "react";

import "./PaymentHistory.css";
const History = ({
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
  completionTime,
  note,
}) => {
  const [arrow, setArrow] = useState(false);
  const money = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
  });
  return (
    <div
      style={{
        width: "100%",
        background: "var(--white)",
        height: arrow ? 250 : 70,
        borderRadius: "var(--br-xs)",
        overflow: "hidden",
        boxShadow: arrow && "0px 0px 10px rgba(0, 0, 0, 0.25)",
        marginBottom: 10,
      }}
      className="animi"
    >
      <div
        style={{
          width: "100%",
          height: 70,
          borderRadius: !arrow && "var(--br-xs)",
          border: !arrow && "1px solid var(--color-whitesmoke)",
          backgroundColor: arrow && "#aa272f", // #6486FF   #aa272f
          position: "relative",
        }}
        // className={`${arrow && "lines"}`}
      >
        <div
          className="div1"
          style={{
            position: "absolute",
            top: 25,
            left: 40,
            color: arrow ? "#fff" : "var(--color-gray)",
          }}
        >
          {money.format(amount)}
        </div>
        <button
          className="option"
          style={{
            padding: 5,
            paddingRight: 12,
            paddingLeft: 12,
            backgroundColor: "rgba(35, 162, 109, 0.12)", // "#FFF5DA"
            border: "none",
            borderRadius: "var(--br-xs)",
            fontSize: "5",
            fontWeight: 600,
            fontFamily: "var(--font-poppins)",
            color: "rgba(35, 162, 109, 1)", //"#FED04A"
            top: 20,
            left: 150,
          }}
        >
          <h4>{status}</h4>
        </button>
        <div
          className="option"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: 10,
            top: 13,
            left: 280,
          }}
        >
          <div className="avatar" style={{ borderRadius: 10 }}>
            <img
              src={recepientPic}
              alt="logo"
              style={{ display: "block", width: "100%" }}
            />
          </div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 400,
              fontFamily: "var(--font-poppins)",
              color: arrow ? "#fff" : "var(--color-gray)",
            }}
          >
            {recepientName}
          </div>
        </div>
        <div
          className="option"
          style={{
            fontSize: 15,
            fontWeight: 400,
            fontFamily: "var(--font-poppins)",
            top: 25,
            right: 290,
            color: arrow ? "#fff" : "var(--color-gray)",
          }}
        >
          {date}
        </div>
        <div
          className="option"
          style={{
            top: 19,
            right: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              fontSize: 15,
              fontWeight: 400,
              fontFamily: "var(--font-poppins)",
              color: arrow ? "#fff" : "var(--color-gray)",
            }}
          >
            {paymentMethod}
            <br />
            <b style={{ color: arrow && "#fff" }}>{paidWith}</b>
          </div>
        </div>
        <button
          className="option"
          style={{
            backgroundColor: arrow ? "rgb(254 127 150 / 48%)" : "#F4F5FA",
            border: "none",
            borderRadius: "var(--br-xs)",
            top: 15,
            right: 20,
            padding: 8,
          }}
          onClick={() => {
            setArrow(!arrow);
          }}
        >
          {arrow ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#fff "
              viewBox="0 0 256 256"
            >
              <path d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#15223c"
              viewBox="0 0 256 256"
            >
              <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
            </svg>
          )}
        </button>
      </div>
      {/* de */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          height: 180,
          width: "100%",
          //   background: "blue",
          padding: 10,
        }}
      >
        <div
          style={{
            height: "100%",
            width: 230,
            marginLeft: 30,
          }}
        >
          <div
            className="your-balance"
            style={{
              position: "static",
              marginTop: 10,
              color: "var(--color-darkgray-100)",
            }}
          >
            Transaction Number
          </div>
          <div
            className="div1"
            style={{ position: "static", marginTop: 10, marginBottom: 20 }}
          >
            {transactionNumber}
          </div>
          <div
            style={{
              width: "100%",
              height: 70,
              background: "#F5F6FA",
              borderRadius: "var(--br-xs)",
              position: "relative",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#0f0f0f"
              viewBox="0 0 256 256"
              style={{ position: "absolute", left: 5, top: 5 }}
            >
              <path d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
            </svg>
            <div style={{ position: "absolute", top: 13, left: 30 }}>
              <div
                className="your-balance"
                style={{ position: "relative", fontSize: 10 }}
              >
                + The transfer has been successfully paid and submitted to the
                recipient bank. Kindly note the actual credited time is subject
                to the bank
              </div>
              {/* <div
              className="your-balance"
              style={{ position: "relative", fontSize: 10 }}
            >
              + Kindly note the actual credited time is subject to the
              bank
            </div>
            <div
              className="your-balance"
              style={{ position: "relative", fontSize: 10 }}
            >
              + 8 extra hours ($2 per 1 hour)
            </div> */}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "column",
            height: "100%",
            width: 450,
            // background: "blue",
            padding: 10,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              columnGap: 70,
            }}
          >
            <div>
              <div
                className="your-balance"
                style={{
                  position: "static",
                  marginTop: 10,
                  color: "var(--color-darkgray-100)",
                  // alignSelf: "flex-start",
                }}
              >
                Recepient Bank{" "}
                <span style={{ color: "#fff" }}>gggggggggguuu</span>
              </div>
              <div
                className="div1"
                style={{
                  position: "static",
                  marginTop: 10,
                  marginBottom: 20,
                }}
              >
                {recipientBank}
              </div>
            </div>
            <div>
              <div
                className="your-balance"
                style={{
                  position: "static",
                  marginTop: 10,
                  color: "var(--color-darkgray-100)",
                }}
              >
                Session ID
              </div>
              <div
                className="div1"
                style={{
                  position: "static",
                  marginTop: 10,
                  marginBottom: 20,
                }}
              >
                {sessionId}
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              columnGap: 70,
            }}
          >
            <div>
              <div
                className="your-balance"
                style={{
                  position: "static",
                  marginTop: 10,
                  color: "var(--color-darkgray-100)",
                }}
              >
                Recepient Account Number
              </div>
              <div
                className="div1"
                style={{
                  position: "static",
                  marginTop: 10,
                  marginBottom: 20,
                }}
              >
                {recipientAccountNumber}
              </div>
            </div>
            <div>
              <div
                className="your-balance"
                style={{
                  position: "static",
                  marginTop: 10,
                  color: "var(--color-darkgray-100)",
                }}
              >
                {completionTime ? "Completion Time" : "Remark"}
              </div>
              <div
                className="div1"
                style={{
                  position: "static",
                  marginTop: 10,
                  marginBottom: 20,
                }}
              >
                {completionTime ? `${date + " " + completionTime}` : note}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "80%",
            // backgroundColor: "red",
            flexGrow: 1,
            display: "flex",
            justifyContent: "start",
            alignItems: "end",
            flexDirection: "column",
            paddingRight: 10,
            borderLeft: "1px solid var(--color-whitesmoke)",
          }}
        >
          <div
            className="your-balance"
            style={{
              position: "static",
              //   marginTop: 10,
              color: "var(--color-darkgray-100)",
            }}
          >
            Total Payment
          </div>
          <div
            className="div1"
            style={{
              position: "static",
              marginTop: 10,
            }}
          >
            {money.format(totalPayment)}
          </div>

          <div
            className="your-balance"
            style={{
              position: "static",
              marginTop: 10,
              color: "var(--color-darkgray-100)",
            }}
          >
            Fee
          </div>
          <div
            className="div1"
            style={{
              position: "static",
              marginTop: 10,
            }}
          >
            {money.format(fee)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
