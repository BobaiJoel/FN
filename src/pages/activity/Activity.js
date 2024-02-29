import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { url } from "../../components/helper/userRequest";
import axios from "axios";
import useMediaQuery from "../../components/useMediaQuery";
import { useAuthStore } from "./../../store/store";
import "../../components/QuickTransferForm/QuickTransferForm.css";
import "./activity.css";
const Activity = () => {
  axios.defaults.withCredentials = true;
  const moblie = useMediaQuery("(max-width: 954px)");
  const now = new Date();
  //console.log();
  const setConfirmDetails = useAuthStore((state) => state.setConfirmDetails);
  const setActiveNavItem = useAuthStore((state) => state.setActiveNavItem);
  const setRecepientName = useAuthStore((state) => state.setRecepientName);
  const setRecepientPic = useAuthStore((state) => state.setRecepientPic);
  const setRecepientBank = useAuthStore((state) => state.setRecepientBank);
  const setPaymentStatus = useAuthStore((state) => state.setPaymentStatus);
  const setSessionID = useAuthStore((state) => state.setSessionID);
  const setDate = useAuthStore((state) => state.setDate);
  const setPaymentMethod = useAuthStore((state) => state.setPaymentMethod);
  const setPaidWith = useAuthStore((state) => state.setPaidWith);
  const setTransactionNumber = useAuthStore(
    (state) => state.setTransactionNumber
  );
  const setRecepientAccountNumber = useAuthStore(
    (state) => state.setRecepientAccountNumber
  );
  const [input, setInput] = useState();
  useEffect(() => {
    setActiveNavItem("Activity");
  });
  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    // Check if input exceeds max length
    if (inputValue.length <= 12) {
      setInput(inputValue);
    }
  };
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
          //   console.log(err, err?.response?.data);
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
  const sendMoney = () => {
    if (!input) {
      toast.error("Please Enter Account number", {
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

    if (input === "7418529630") {
      setRecepientName("Henry Daniel");
      setRecepientAccountNumber(7418529630);
      setRecepientBank("City Bank");
      setRecepientPic(
        "https://images.unsplash.com/photo-1621972660772-6a0427d5e102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      );
      setConfirmDetails(true);
    } else if (input === "0562882739") {
    } else {
      toast.error("Invalid Account number", {
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
    setPaymentStatus("Successful");
    setSessionID(
      Number(
        Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join(
          ""
        )
      )
    );
    setTransactionNumber(
      Number(
        Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join(
          ""
        )
      )
    );
    setDate(now.toLocaleDateString(undefined, { dateStyle: "medium" }));
    setPaidWith("Balance");
    setPaymentMethod("Online Transfer");
  };

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
          <div
            style={{
              height: "100%",
              width: "100%",
              overflow: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 10px",
                borderRadius: "var(--br-xs)",
                width: "90%",
                height: 400,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100",
                  height: 90,
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 1px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  className="my-card"
                  style={{
                    margin: 0,
                    padding: 0,
                    marginLeft: 30,
                    fontSize: 25,
                  }}
                >
                  Transfer Funds
                </div>
              </div>
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: 20,
                  paddingTop: 50,
                  rowGap: 50,
                }}
              >
                <div style={{ width: "85%", marginBottom: 10 }}>
                  <p
                    className="card-number"
                    style={{
                      position: "relative",
                      fontSize: 13,
                      marginBottom: 5,
                    }}
                  >
                    Account number
                  </p>
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
                    {/* <p style={{ fontSize: 15, fontWeight: "600" }}>A</p> */}
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
                      value={input}
                      maxLength="12"
                      type="number"
                      placeholder="Enter Account number"
                      required
                    />
                  </div>
                </div>

                <div
                  className="frame-parent3"
                  style={{
                    position: "relative",
                    width: "100%",
                    // background: "red",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="send-money-wrapper"
                    style={{
                      position: "relative",
                      margin: 0,
                      left: 0,
                      width: "35%",
                    }}
                    onClick={sendMoney}
                  >
                    <div className="send-money">Send money</div>
                  </div>
                  <div
                    className="send-money-wrapper"
                    style={{
                      position: "relative",
                      margin: 0,
                      left: 0,
                      backgroundColor: "var(--color-ghostwhite)",
                      width: "35%",
                    }}
                  >
                    <div className="send-money" style={{ color: "#000" }}>
                      Save as Draft
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 10px",
              borderRadius: "var(--br-xs)",
              width: "60%",
              height: "60%",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100",
                height: 90,
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 1px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                className="my-card"
                style={{ margin: 0, padding: 0, marginLeft: 30, fontSize: 25 }}
              >
                Transfer Funds
              </div>
            </div>
            <div
              style={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                padding: 20,
                paddingTop: 50,
                rowGap: 50,
              }}
            >
              <div style={{ width: "85%", marginBottom: 10 }}>
                <p
                  className="card-number"
                  style={{
                    position: "relative",
                    fontSize: 13,
                    marginBottom: 5,
                  }}
                >
                  Account number
                </p>
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
                  {/* <p style={{ fontSize: 15, fontWeight: "600" }}>A</p> */}
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
                    value={input}
                    maxLength="12"
                    type="number"
                    placeholder="Enter Account number"
                    required
                  />
                </div>
              </div>

              <div
                className="frame-parent3"
                style={{
                  position: "relative",
                  width: "100%",
                  // background: "red",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div
                  className="send-money-wrapper"
                  style={{
                    position: "relative",
                    margin: 0,
                    left: 0,
                    width: "35%",
                  }}
                  onClick={sendMoney}
                >
                  <div className="send-money">Send money</div>
                </div>
                <div
                  className="send-money-wrapper"
                  style={{
                    position: "relative",
                    margin: 0,
                    left: 0,
                    backgroundColor: "var(--color-ghostwhite)",
                    width: "35%",
                  }}
                >
                  <div className="send-money" style={{ color: "#000" }}>
                    Save as Draft
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default Activity;
