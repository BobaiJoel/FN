import { useAuthStore } from "./../../store/store";
import useMediaQuery from "../useMediaQuery";
import "./BalanceDisplay.css";
const BalanceDisplay = () => {
  const moblie = useMediaQuery("(max-width: 954px)");
  const money = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
  });
  let user = useAuthStore((state) => {
    return state.auth.user;
  });
  return (
    <div className="frame-parent5" style={{ width: moblie ? "90%" : 331 }}>
      <div className="your-balance-parent">
        <div className="your-balance">Your Balance</div>
        <div className="div1">{money.format(user?.myBalance)}</div>
        <div className="group">
          <div className="div2">{`${user?.myIncomeUp}`}%</div>
          <img className="frame-icon5" alt="" src="/frame3.svg" />
        </div>
        <div className="container">
          <div className="div2">{`${user?.mySavingsUp}`}%</div>
          <img className="frame-icon5" alt="" src="/frame4.svg" />
        </div>
      </div>
      <img className="frame-child5" alt="" src="/vector-2.svg" />
      <div className="currency">Currency</div>
      <div className="status">Status</div>
      <div className="usd-us-dollar">USD/ US Dollar</div>
      <div className="active">{`${user?.status}`}</div>
    </div>
  );
};

export default BalanceDisplay;
