import React from "react";
import CreditCardForm from "../CreditCardForm/CreditCardForm";
import BalanceDisplay from "../BalanceDisplay/BalanceDisplay";
//import QuickTransferForm from "../QuickTransferForm/QuickTransferForm";
import "./SideDiv.css";
const SideDiv = () => {
  return (
    <div className="sideDive">
      <div className="my-card">My Card</div>
      <CreditCardForm />
      <BalanceDisplay />
      <div className="buuton">
        <div className="add-card-parent">
          <div className="add-card">Add card</div>
          <img className="frame-child" alt="" src="/group-9.svg" />
        </div>
      </div>
      {/* QuickTransferForm */}
      {/* <div
        style={{
          width: "100%",
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
                fontSize: 15,
              }}
            >
              Joel Isaiah Bobai
            </div>
          </div>
          <div>
            <img className="frame-icon4" alt="" src="/frame2.svg" />
          </div>
        </div>
        <div className="card-number-parent">
          <div className="card-number" style={{ paddingLeft: 20 }}>
            Card Number
          </div>
        </div>
        <div
          className="form"
          style={{
            position: "relative",
            marginBottom: 10,
            marginTop: 10,
            width: "98%",
          }}
        >
          <div className="parent" style={{ borderColor: "#aa272f" }}>
            <input
              className="div"
              type="number"
              style={{
                border: "none",
                // fontSize: 23,
                outline: "none",
                // background: "red",
                width: 250,
                fontSize: 20,
              }}
              placeholder="Enter number"
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
            <div className="send-money-wrapper" style={{ width: 130 }}>
              <div className="send-money">Send money</div>
            </div>
            <div className="save-as-draft-wrapper" style={{ width: 130 }}>
              <div className="save-as-draft">Save as Draft</div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <QuickTransferForm /> */}
      <h1 style={{ color: "#fff" }}>ggg</h1>
    </div>
  );
};

export default SideDiv;
