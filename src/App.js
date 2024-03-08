import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "./layouts/dashboard";
import GeneralApp from "./pages/dashboard/GeneralApp";
import Register from "./components/register/Register";
import Transaction from "./pages/transaction/Transaction";
import Activity from "./pages/activity/Activity";
import Card from "./pages/card/Card";
import VerifyMe from "./components/VerifyMe/VerifyMe";
import Verification from "./components/verification/Verification";
import Login from "./components/login/Login";
import OtpVerification from "./components/OtpVerification/OtpVerification";
import Page404 from "./pages/Page404";
import "./App.css";
// test
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { element: <Navigate to="/app" replace />, index: true },
      { path: "app", element: <GeneralApp /> },
      { path: "transaction", element: <Transaction /> },
      { path: "activity", element: <Activity /> },
      { path: "card", element: <Card /> },

      { path: "404", element: <Page404 /> },
      { path: "*", element: <Navigate to="/404" replace /> },
    ],
  },
  { path: "*", element: <Navigate to="/404" replace /> },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/verification",
    element: <Verification></Verification>,
  },
  {
    path: "/VerifyMe",
    element: <VerifyMe />,
  },
  {
    path: "/OtpVerification",
    element: <OtpVerification />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
