import React from "react";
//import { Link } from "react-router-dom";
import useMediaQuery from "../useMediaQuery";
//import { useAuthStore } from "./../../store/store";
import BalanceDisplay from "../BalanceDisplay/BalanceDisplay";
import BalanceSummary from "../BalanceSummaryContainer/BalanceSummary";
import CreditCardForm from "../CreditCardForm/CreditCardForm";
//import HistoryTransactions from "../historyTransactions/HistoryTransactions";
import PaymentHistory from "../paymentHistory/PaymentHistory";
//import Group from "../transactions/Group";
//import QuickTransferForm from "../QuickTransferForm/QuickTransferForm";
import "./MainDiv.css";
const MainDiv = () => {
  const moblie = useMediaQuery("(max-width: 954px)");

  return (
    <div className="mainDiv">
      {!moblie && (
        <>
          <BalanceSummary />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              width: "100%",
              height: "100%",
              // background: "red",
              paddingTop: 40,
            }}
          >
            <PaymentHistory />
            {/* <HistoryTransactions /> */}
          </div>
        </>
      )}
      {moblie && (
        <div
          style={{
            // height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            flexDirection: "column",
            // overflow: "hidden",
          }}
        >
          <BalanceDisplay />
          <div
            className="my-card"
            style={{ alignSelf: "flex-start", marginLeft: 30 }}
          >
            My Card
          </div>
          <CreditCardForm />
          {/* <div className="buuton">
            <div className="add-card-parent">
              <div className="add-card">Add card</div>
              <img className="frame-child" alt="" src="/group-9.svg" />
            </div>
          </div> */}
          {/* <div
            style={{
              width: "90%",
              height: 300,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: 10,
              marginBottom: 20,
              padding: 10,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <div
              className="quick-transfer"
              style={{ position: "relative", marginBottom: 10 }}
            >
              Quick Transfer
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <div className="avatar">
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKIgKHK6pgonB1PYlB5hO5xduRDNqTzNlSKgFR3SouvJx4N8qRDUPbOsxegCILjPcWoTw&usqp=CAU`}
                    alt="logo"
                    style={{ display: "block", width: "100%" }}
                  />
                </div>
                <div
                  className="quick-transfer"
                  style={{
                    position: "relative",
                    paddingTop: 10,
                    paddingLeft: 10,
                  }}
                >
                  Joel Isaiah Bobai
                </div>
              </div>
              <div>
                <img className="frame-icon4" alt="" src="/frame2.svg" />
              </div>
            </div>
            <div style={{ width: "85%", marginBottom: 10, marginTop: 20 }}>
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
                  type="number"
                  placeholder="100.00-5,000,000.00"
                />
              </div>
            </div>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 50,
                // background: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <div className="frame-parent3">
                <div className="send-money-wrapper">
                  <div className="send-money">Send money</div>
                </div>
                <div className="save-as-draft-wrapper">
                  <div className="save-as-draft">Save as Draft</div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <QuickTransferForm /> */}
          {/* <HistoryTransactions /> */}
          {/* <Group /> */}
        </div>
      )}
    </div>
  );
};

export default MainDiv;
