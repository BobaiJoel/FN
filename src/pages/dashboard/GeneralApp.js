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

  useEffect(() => {
    setActiveNavItem("Overview");
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
      // console.log(data);
      return data;
    }
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest().then((data) => {
        try {
          console.log(data?.user);

          setUser(data?.user);
          setIsLoggedIn(true);
        } catch (error) {
          setIsLoggedIn(false);
        }
      });
    }
  }, []);
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
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default GeneralApp;