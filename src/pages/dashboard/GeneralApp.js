import React, { useEffect } from "react";
import { useAuthStore } from "./../../store/store";
import { url } from "../../components/helper/userRequest";
import { Navigate } from "react-router-dom";
import axios from "axios";
import useMediaQuery from "../../components/useMediaQuery";
import SideDiv from "../../components/sideContainer/SideDiv";
import MainDiv from "../../components/mainContainer/MainDiv";
let firstRender = true;
const GeneralApp = () => {
  const sideContainer = useMediaQuery("(max-width: 1339px)");
  axios.defaults.withCredentials = true;
  const setActiveNavItem = useAuthStore((state) => state.setActiveNavItem);
  const setUser = useAuthStore((state) => state.setUser);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  let isLoggedIn = useAuthStore((state) => {
    return state.auth.isLoggedIn;
  });
  let user = useAuthStore((state) => {
    return state.auth.user;
  });

  useEffect(() => {
    setActiveNavItem("Overview");
  });
  // logout
  const sendLogoutReq = async () => {
    const res = await axios.post(`${url()}/api/v1/user/logout`, null, {
      withCredentials: true,
    });

    if (res.status === 200) {
      return res;
    }
    return new Error("Unable TO Logout. Please try again");
  };
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

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest().then((data) => {
        try {
          console.log(data.user);
          setIsLoggedIn(true);
          setUser(data?.user);
        } catch (error) {
          setIsLoggedIn(false);
        }
      });
    }
  });
  // // downwards is to keep the user LOGIN
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
  const handleLogout = async () => {
    await sendLogoutReq().then(() => setIsLoggedIn(false));
  };
  //  console.log(user?._id);
  if (isLoggedIn) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        {user?._id === "65083e92d319b1e66c72e26aQ" ? (
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
                onClick={handleLogout}
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
                  customer, we have temporarily suspended your account due to
                  the detection of multiple devices and transactions from an
                  unfamiliar location. To resolve this issue, kindly visit one
                  of our branches with your valid identification, or get in
                  touch with us at{" "}
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
        ) : (
          <>
            {/* Side Container */}
            {!sideContainer && <SideDiv />}

            <div
              style={{
                height: "100%",
                width: sideContainer ? "100%" : "calc(100vw - 390px)",
                // backgroundColor: "red",
              }}
            >
              {/* Main Container */}
              <MainDiv />
            </div>
          </>
        )}
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default GeneralApp;
