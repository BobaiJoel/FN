import React, { useEffect } from "react";
import { useAuthStore } from "./../../store/store";
import useMediaQuery from "../../components/useMediaQuery";
import { Navigate } from "react-router-dom";
import { url } from "../../components/helper/userRequest";
import axios from "axios";
import CreditCardForm from "../../components/CreditCardForm/CreditCardForm";
import BalanceDisplay from "../../components/BalanceDisplay/BalanceDisplay";
import "./card.css";
const Card = () => {
  axios.defaults.withCredentials = true;
  const moblie = useMediaQuery("(max-width: 954px)");
  const setActiveNavItem = useAuthStore((state) => state.setActiveNavItem);
  useEffect(() => {
    setActiveNavItem("Card");
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

  if (isLoggedIn) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {moblie ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="my-card">My Card</div>
            <CreditCardForm />
            <BalanceDisplay />
            <div className="buuton">
              <div className="add-card-parent">
                <div className="add-card">Add card</div>
                <img className="frame-child" alt="" src="/group-9.svg" />
              </div>
            </div>
            <p style={{ height: 100, color: "#fff" }}>khkk</p>
          </div>
        ) : (
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className="my-card">My Card</div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                columnGap: 30,
              }}
            >
              <CreditCardForm />
              <BalanceDisplay />
            </div>
            <div className="buuton">
              <div className="add-card-parent">
                <div className="add-card">Add card</div>
                <img className="frame-child" alt="" src="/group-9.svg" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <Navigate to="/app" />;
  }
};

export default Card;
