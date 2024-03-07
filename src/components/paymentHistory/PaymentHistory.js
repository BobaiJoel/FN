import React, { useEffect, useState } from "react";
import History from "./History";
import { useAuthStore } from "./../../store/store";
import useMediaQuery from "../useMediaQuery";
import "./PaymentHistory.css";
let run = false;
const PaymentHistory = () => {
  const sideContainer = useMediaQuery("(max-width: 1339px)");
  let transaction = useAuthStore((state) => {
    return state.auth.transaction;
  });
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    run = true;
    if (run) {
      run = false;
      const reversedList = transaction?.slice().reverse();
      setTransactions(reversedList);
    }
  }, [transaction]);
  // Reverse the original list

  return (
    <div style={{ width: sideContainer ? "93%" : "90%", height: "100%" }}>
      <div className="my-card">Payment history</div>
      <div
        style={{
          width: "100%",
          height: 50,
          background: "#F5F6FA",
          borderRadius: 10,
          position: "relative",
        }}
      >
        <h4 className="option" style={{ top: 15, left: 40 }}>
          Amount
        </h4>
        <h4 className="option" style={{ top: 15, left: 150 }}>
          Status
        </h4>
        <h4 className="option" style={{ top: 15, left: 280 }}>
          Recepient
        </h4>
        <h4 className="option" style={{ top: 15, right: 350 }}>
          Date
        </h4>
        <h4 className="option" style={{ top: 15, right: 100 }}>
          Payment method
        </h4>
      </div>
      <div
        style={{
          width: "100%",
          flexGrow: 1,
          paddingTop: 10,
          // background: "red",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 600,
            overflow: "auto",
            paddingLeft: 7,
            paddingRight: 7,
            // display: "grid",
            // flexDirection: "column",
            // justifyContent: "flex-start",
            // alignItems: "center",
          }}
        >
          {transactions?.map((data) => (
            <History
              key={data?._id}
              amount={data?.amount}
              totalPayment={data?.totalPayment}
              fee={data?.fee}
              recepientName={data?.recepientName}
              recepientPic={data?.recepientPic}
              date={data?.date}
              status={data?.status}
              transactionNumber={data?.transactionNumber}
              paidWith={data?.paidWith}
              paymentMethod={data?.paymentMethod}
              sessionId={data?.sessionId}
              recipientBank={data?.recipientBank}
              recipientAccountNumber={data?.recipientAccountNumber}
              completionTime={data?.completionTime}
              note={data?.note}
            />
          ))}
          <div style={{ width: "100%", height: 260 }}></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
