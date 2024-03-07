import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "./../../store/store";
import useMediaQuery from "../useMediaQuery";
import "./Header.css";
const Header = () => {
  const [on, setOn] = useState(false);
  const mobile = useMediaQuery("(max-width: 500px)");
  const logoIcon = useMediaQuery("(max-width: 375px)");
  const frameParent1 = useMediaQuery("(min-width: 1061px)");
  const frameParent2 = useMediaQuery("(min-width: 1113px)");
  const btn = useAuthStore((state) => state.setClick);
  const setActiveNavItem = useAuthStore((state) => state.setActiveNavItem);
  const setBtn = useAuthStore((state) => state.setClick);
  let user = useAuthStore((state) => {
    return state.auth.user;
  });
  let activeNavItem = useAuthStore((state) => {
    return state.auth.activeNavItem;
  });
  let nav = useAuthStore((state) => {
    return state.auth.click;
  });

  return (
    <>
      <div className="header">
        {mobile ? (
          <div>
            <img
              className="logo-icon"
              alt=""
              style={{ position: "absolute", left: "10px", top: "20px" }}
              src="https://www.plainscapital.com/wp-content/themes/plainscapitalbank/imgs/logo.png"
            />
            <img
              className="logo-icon"
              style={{
                position: "absolute",
                left: logoIcon ? "150px" : "260px",
                top: "20px",
                cursor: "pointer",
              }}
              alt=""
              src="/togo.svg"
              onClick={() => {
                setOn(!on);
                btn(on);
              }}
            />
          </div>
        ) : (
          <>
            <div className="nav-link">
              <img
                className="logo-icon"
                alt=""
                src="https://www.plainscapital.com/wp-content/themes/plainscapitalbank/imgs/logo.png"
              />
              <Link
                to={`app`}
                onClick={() => {
                  setActiveNavItem("Overview");
                }}
                className={`${
                  activeNavItem === "Overview"
                    ? "dashboard-1-parent"
                    : "frame-container"
                }`}
              >
                <img
                  className="dashboard-1-icon"
                  alt=""
                  src={`${
                    activeNavItem === "Overview"
                      ? "/dashboard 1.svg"
                      : "/dashboard11.svg"
                  }`}
                />
                <div
                  className="overview"
                  style={{
                    color:
                      activeNavItem === "Overview"
                        ? "#aa272f"
                        : "var(--color-darkgray-100)",
                  }}
                >
                  Overview
                </div>
              </Link>
              <Link
                to={`transaction`}
                onClick={() => {
                  setActiveNavItem("Transaction");
                }}
                className={`${
                  activeNavItem === "Transaction"
                    ? "dashboard-1-parent"
                    : "frame-container"
                }`}
              >
                <img
                  className="dashboard-1-icon"
                  alt=""
                  src={`${
                    activeNavItem === "Transaction"
                      ? "/framee.svg"
                      : "/frame.svg"
                  }`}
                />
                <div
                  className="overview"
                  style={{
                    color:
                      activeNavItem === "Transaction"
                        ? "#aa272f"
                        : "var(--color-darkgray-100)",
                  }}
                >
                  Transaction
                </div>
              </Link>
              <Link
                to={`card`}
                className={`${
                  activeNavItem === "Card"
                    ? "dashboard-1-parent"
                    : "frame-container"
                }`}
                onClick={() => {
                  setActiveNavItem("Card");
                }}
              >
                <img
                  className="dashboard-1-icon"
                  alt=""
                  src={`${
                    activeNavItem === "Card" ? "/frame11.svg" : "/frame1.svg"
                  }`}
                />
                <div
                  className="Card"
                  style={{
                    color:
                      activeNavItem === "Card"
                        ? "#aa272f"
                        : "var(--color-darkgray-100)",
                  }}
                >
                  Card
                </div>
              </Link>
              <Link
                to={`activity`}
                onClick={() => {
                  setActiveNavItem("Activity");
                }}
                className={`${
                  activeNavItem === "Activity"
                    ? "dashboard-1-parent"
                    : "frame-container"
                }`}
              >
                <img
                  className="dashboard-1-icon"
                  alt=""
                  src={`${
                    activeNavItem === "Activity"
                      ? "/activity 1.svg"
                      : "/activity-1.svg"
                  }`}
                />
                <div
                  className="Activity"
                  style={{
                    color:
                      activeNavItem === "Activity"
                        ? "#aa272f"
                        : "var(--color-darkgray-100)",
                  }}
                >
                  Activity
                </div>
              </Link>
            </div>
            {frameParent1 && (
              <div className="frame-parent1">
                {frameParent2 && (
                  <div className="frame-parent2">
                    <div className="sun-1-wrapper">
                      <img className="sun-1-icon" alt="" src="/sun-1.svg" />
                    </div>
                    <div className="moon-1-wrapper">
                      <img className="sun-1-icon" alt="" src="/moon-1.svg" />
                    </div>
                  </div>
                )}

                <img className="frame-item" alt="" src="/group-3.svg" />
                <img className="frame-item" alt="" src="/group-2.svg" />
                {/* <div className="ellipse-div" /> */}
                <div className="avatar">
                  <img
                    src={user?.profilePicture}
                    alt="logo"
                    style={{ display: "block", width: "100%" }}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {nav && (
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "75%",
              height: "100%",
              // position: "absolute",
              backgroundColor: "#fff",
              // zIndex: 1,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "30%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              {" "}
              <Link
                to={`app`}
                onClick={() => {
                  setActiveNavItem("Overview");
                }}
                className={`${
                  activeNavItem === "Overview"
                    ? "dashboard-1-parent"
                    : "frame-container"
                }`}
              >
                <img
                  className="dashboard-1-icon"
                  alt=""
                  src={`${
                    activeNavItem === "Overview"
                      ? "/dashboard 1.svg"
                      : "/dashboard11.svg"
                  }`}
                />
                <div
                  className="overview"
                  style={{
                    color:
                      activeNavItem === "Overview"
                        ? "#aa272f"
                        : "var(--color-darkgray-100)",
                  }}
                >
                  Overview
                </div>
              </Link>
              <Link
                to={`transaction`}
                onClick={() => {
                  setActiveNavItem("Transaction");
                }}
                className={`${
                  activeNavItem === "Transaction"
                    ? "dashboard-1-parent"
                    : "frame-container"
                }`}
              >
                <img
                  className="dashboard-1-icon"
                  alt=""
                  src={`${
                    activeNavItem === "Transaction"
                      ? "/framee.svg"
                      : "/frame.svg"
                  }`}
                />
                <div
                  className="overview"
                  style={{
                    color:
                      activeNavItem === "Transaction"
                        ? "#aa272f"
                        : "var(--color-darkgray-100)",
                  }}
                >
                  Transaction
                </div>
              </Link>
              <Link
                to={`card`}
                className={`${
                  activeNavItem === "Card"
                    ? "dashboard-1-parent"
                    : "frame-container"
                }`}
                onClick={() => {
                  setActiveNavItem("Card");
                }}
              >
                <img
                  className="dashboard-1-icon"
                  alt=""
                  src={`${
                    activeNavItem === "Card" ? "/frame11.svg" : "/frame1.svg"
                  }`}
                />
                <div
                  className="Card"
                  style={{
                    color:
                      activeNavItem === "Card"
                        ? "#aa272f"
                        : "var(--color-darkgray-100)",
                  }}
                >
                  Card
                </div>
              </Link>
              <Link
                to={`activity`}
                onClick={() => {
                  setActiveNavItem("Activity");
                }}
                className={`${
                  activeNavItem === "Activity"
                    ? "dashboard-1-parent"
                    : "frame-container"
                }`}
              >
                <img
                  className="dashboard-1-icon"
                  alt=""
                  src={`${
                    activeNavItem === "Activity"
                      ? "/activity 1.svg"
                      : "/activity-1.svg"
                  }`}
                />
                <div
                  className="Activity"
                  style={{
                    color:
                      activeNavItem === "Activity"
                        ? "#aa272f"
                        : "var(--color-darkgray-100)",
                  }}
                >
                  Activity
                </div>
              </Link>
            </div>
          </div>
          <div
            style={{
              width: "25%",
              height: "100%",
              // position: "absolute",
              backgroundColor: "#00000080",
              // zIndex: 1,
            }}
            onClick={() => setBtn(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default Header;
