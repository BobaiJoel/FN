import React, { useEffect } from "react";
import dataPic from "./data.png";
import allPic from "./all.png";
import PaymentHistory from "../../components/paymentHistory/PaymentHistory";
import { Navigate } from "react-router-dom";
import TransactionDiv from "./TransactionDiv";
import { useAuthStore } from "./../../store/store";
import { url } from "../../components/helper/userRequest";
import useMediaQuery from "../../components/useMediaQuery";
import axios from "axios";
function Transaction() {
  axios.defaults.withCredentials = true;
  const setTransaction = useAuthStore((state) => state.setTransaction);
  let transaction = useAuthStore((state) => {
    return state.auth.transaction;
  });

  let user = useAuthStore((state) => {
    return state.auth.user;
  });

  const moblie = useMediaQuery("(max-width: 954px)");
  const setActiveNavItem = useAuthStore((state) => state.setActiveNavItem);
  useEffect(() => {
    setActiveNavItem("Transaction");
  });
  const getTransactions = async () => {
    const res = await axios
      .post(
        `${url()}/api/v1/transaction/get`,
        {
          userTransactionId: user._id,
        },
        {
          withCredentials: true,
        }
      )
      .catch((err) => {
        // toast.error(err.response.data);
        // console.log(err.response.data);
        // console.log(err);
      });

    if (res) {
      const data = await res.data;
      return data;
    }
  };

  useEffect(() => {
    getTransactions().then((data) => {
      setTransaction(data);
      //   console.log(data);
    });
  });
  const setUser = useAuthStore((state) => state.setUser);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  let isLoggedIn = useAuthStore((state) => {
    return state.auth.isLoggedIn;
  });

  // downwards is to keep the user LOGIN
  useEffect(() => {
    const sendRequest = async () => {
      const res = await axios
        .get(`${url()}/api/v1/user/private_data`, {
          withCredentials: true,
        })
        .catch((err) => {
          setIsLoggedIn(false);
          console.log(err, err?.response?.data);
        });

      if (res) {
        const data = await res?.data;
        // console.log(data);
        return data;
      }
    };

    sendRequest().then((data) => {
      try {
        // console.log(data.user);
        setIsLoggedIn(true);
        setUser(data?.user);
      } catch (error) {
        setIsLoggedIn(false);
      }
    });
  }, [setIsLoggedIn, setUser]);

  if (isLoggedIn) {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {moblie ? (
          <div style={{ height: "100%", width: "100%", overflow: "auto" }}>
            <div
              style={{
                width: "100%",
                height: 70,
                //   background: "red",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <div style={{ display: "flex" }}>
                <img src={dataPic} alt="" width={40} />

                <div className="my-card" style={{ margin: 7, padding: 0 }}>
                  Transactions
                </div>
              </div>

              <img src={allPic} alt="" width={40} />
            </div>
            <div style={{ display: "flex", flexDirection: "column-reverse" }}>
              {transaction?.map((data) => (
                <TransactionDiv
                  key={data._id}
                  amount={data.amount}
                  totalPayment={data.totalPayment}
                  fee={data.fee}
                  recepientName={data.recepientName}
                  recepientPic={data.recepientPic}
                  date={data.date}
                  status={data.status}
                  transactionNumber={data.transactionNumber}
                  paidWith={data.paidWith}
                  paymentMethod={data.paymentMethod}
                  sessionId={data.sessionId}
                  recipientBank={data.recipientBank}
                  recipientAccountNumber={data.recipientAccountNumber}
                  note={data.note}
                />
              ))}
            </div>
          </div>
        ) : (
          <PaymentHistory />
        )}
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
}

export default Transaction;
