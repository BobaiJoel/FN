import React from "react";
import next from "./Vector.svg";
import { useAuthStore } from "./../../store/store";

const TransactionDiv = ({
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
}) => {
  const money = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
  });
  const setSuccessfulPayment = useAuthStore(
    (state) => state.setSuccessfulPayment
  );
  const setPaymentAmount = useAuthStore((state) => state.setPaymentAmount);
  const setFee = useAuthStore((state) => state.setFee);
  const setTotalPayment = useAuthStore((state) => state.setTotalPayment);
  const setPaymentStatus = useAuthStore((state) => state.setPaymentStatus);
  const setRecepientName = useAuthStore((state) => state.setRecepientName);
  const setRecepientBank = useAuthStore((state) => state.setRecepientBank);
  const setRecepientAccountNumber = useAuthStore(
    (state) => state.setRecepientAccountNumber
  );
  const setDate = useAuthStore((state) => state.setDate);
  const setPaymentMethod = useAuthStore((state) => state.setPaymentMethod);
  const setPaidWith = useAuthStore((state) => state.setPaidWith);
  const setRemark = useAuthStore((state) => state.setRemark);
  const setSessionID = useAuthStore((state) => state.setSessionID);
  const setTransactionNumber = useAuthStore(
    (state) => state.setTransactionNumber
  );

  const showReceipt = () => {
    setPaymentAmount(amount);
    setFee(fee);
    setTotalPayment(totalPayment);
    setPaymentStatus(status);
    setRecepientName(recepientName);
    setRecepientBank(recipientBank);
    setRecepientAccountNumber(recipientAccountNumber);
    setDate(date);
    setPaymentMethod(paymentMethod);
    setPaidWith(paidWith);
    setRemark(note);
    setSessionID(sessionId);
    setTransactionNumber(transactionNumber);
    setSuccessfulPayment(true);
  };
  return (
    <div
      style={{
        // backgroundColor: "#F2F2F2",
        width: "100%",
        height: 90,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
      }}
      onClick={showReceipt}
    >
      <div
        style={{
          backgroundColor: "#F2F2F2",
          width: "100%",
          height: 110,
          borderRadius: 10,
          position: "relative",
        }}
      >
        <div
          className="avatar"
          style={{
            height: 40,
            width: 40,
            position: "absolute",
            top: 15,
            left: 10,
          }}
        >
          <img
            src={recepientPic}
            alt="logo"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div
          className="my-card"
          style={{
            margin: 0,
            padding: 0,
            position: "absolute",
            top: 15,
            left: 58,
            fontSize: 12,
          }}
        >
          {recepientName}
        </div>
        <p
          style={{
            margin: 0,
            padding: 0,
            position: "absolute",
            top: 40,
            left: 58,
            fontSize: 12,
            color: "rgba(0, 0, 0, 0.4)",
            fontWeight: "300",
          }}
        >
          {`${paymentMethod} • ${date}`}
        </p>

        <img
          src={next}
          alt=""
          style={{
            position: "absolute",
            top: 25,
            right: 10,
          }}
          width={13}
        />

        <div
          className="my-card"
          style={{
            margin: 0,
            padding: 0,
            position: "absolute",
            top: 15,
            right: 35,
            fontSize: 12,
          }}
        >
          {money.format(amount)}
        </div>
        <p
          style={{
            margin: 0,
            padding: 0,
            position: "absolute",
            top: 40,
            right: 35,
            fontSize: 12,
            color: "rgba(20, 126, 3, 1)",
            fontWeight: "600",
          }}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default TransactionDiv;
