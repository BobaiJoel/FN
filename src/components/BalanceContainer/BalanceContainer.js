import { useMemo } from "react";
import "./BalanceContainer.css";
const BalanceContainer = ({
  imageSize,
  transactionType,
  propLeft,
  propWidth,
  amount,
}) => {
  const money = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
  });
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="frame-parent6" style={frameDivStyle}>
      <img className="frame-child6" alt="" src={imageSize} />
      <div className="my-balance-parent" style={frameDiv1Style}>
        <div className="my-balance">{transactionType}</div>
        <div className="div4">{money.format(amount)}</div>
      </div>
    </div>
  );
};

export default BalanceContainer;
