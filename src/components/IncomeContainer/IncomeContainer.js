import { useMemo } from "react";
import "./IncomeContainer.css";
const IncomeContainer = ({ frame18, income, propLeft, amount, up }) => {
  const money = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
  });
  const frameDiv2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="frame-parent7" style={frameDiv2Style}>
      <img className="frame-child7" alt="" src={frame18} />
      <div className="income-parent">
        <div className="income">{income}</div>
        <div className="div5">{money.format(amount)}</div>
      </div>
      <div className="frame-wrapper">
        <div className="parent1">
          <div className="div6">{`${up}`}%</div>
          <img className="frame-icon7" alt="" src="/frame5.svg" />
        </div>
      </div>
    </div>
  );
};

export default IncomeContainer;
