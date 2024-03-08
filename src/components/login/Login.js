import React, { useEffect } from "react";
import useMediaQuery from "../useMediaQuery";
import RectangleIcon from "./RectangleIcon";
import { Navigate } from "react-router-dom";
import InputComponent from "./InputComponent";
import { useAuthStore } from "./../../store/store";
import { url } from "../helper/userRequest";
import "./Login.css";

import axios from "axios";
let firstRender = true;
const Login = () => {
  axios.defaults.withCredentials = true;
  // const moveTo = useNavigate();
  const side = useMediaQuery("(min-width: 1086px)");
  const setUser = useAuthStore((state) => state.setUser);
  const setTransaction = useAuthStore((state) => state.setTransaction);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  let isLoggedIn = useAuthStore((state) => {
    return state.auth.isLoggedIn;
  });
  // downwards is to keep the user LOGIN
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
      console.log(data);
      return data;
    }
  };

  const getTransactions = async (id) => {
    const res = await axios
      .post(
        `${url()}/api/v1/transaction/get`,
        {
          userTransactionId: id,
        },
        {
          withCredentials: true,
        }
      )
      .catch((err) => {
        // toast.error(err.response.data);
        console.log(err?.response?.data);
        // console.log(err);
      });

    if (res) {
      const data = await res?.data;
      return data;
    }
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest().then(async (data) => {
        try {
          if (data?.user) {
            console.log(data?.user);

            await setUser(data?.user);
            setIsLoggedIn(true);
            getTransactions(data?.user?._id).then((data) => {
              setTransaction(data);
              //   console.log(data);
            });
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          setIsLoggedIn(false);
        }
      });
    }
  }, []);
  // downwards is to keep the user LOGIN
  // useEffect(() => {
  //   const sendRequest = async () => {
  //     const res = await axios
  //       .get(`${url()}/api/v1/user/private_data`, {
  //         withCredentials: true,
  //       })
  //       .catch((err) => {
  //         setIsLoggedIn(false);
  //         console.log(err, err?.response?.data);
  //       });

  //     if (res) {
  //       const data = await res?.data;
  //       // console.log(data);
  //       return data;
  //     }
  //   };

  //   sendRequest().then((data) => {
  //     try {
  //       // console.log(data.user);
  //       setIsLoggedIn(true);
  //       setUser(data?.user);
  //     } catch (error) {
  //       setIsLoggedIn(false);
  //     }
  //   });
  // }, [setIsLoggedIn, setUser]);
  // console.log(isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/app" />;
  } else {
    return (
      <div className="login">
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputComponent />
        </div>
        {side && (
          <div style={{ width: "50%", height: "100%" }}>
            {/* <div className="login-child" /> */}
            <div
              style={{
                position: "relative",
                backgroundImage: "url('undefined.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RectangleIcon />

              <div className="login-item">
                <div className="frame-childOne">
                  <img
                    className="thunderbolt-1-icon"
                    alt=""
                    src="/undefined2.png"
                  />
                </div>
                <b className="pay-bills-transfer">
                  Pay bills, transfer money, deposit checks, and more — all for
                  you
                </b>
                <img
                  className="women-with-tab-1"
                  alt=""
                  src="/undefined1.png"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Login;
