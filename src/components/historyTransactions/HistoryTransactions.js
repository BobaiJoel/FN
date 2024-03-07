import React from "react";
import "./HistoryTransactions.css";
const HistoryTransactions = () => {
  return (
    <div className="frame-parent14">
      <div className="frame-parent15">
        <div className="item-parent">
          <div className="item">
            <div className="order-revenue-parent">
              <div className="order-revenue">Order Revenue</div>
              <div className="apr-27-22">Apr 27, 22</div>
            </div>
            <img className="icon" alt="" src="/icon.svg" />
          </div>
          <div className="div10">+ $874</div>
        </div>
        <div className="item-group">
          <div className="item">
            <div className="order-revenue-parent">
              <div className="order-revenue">Order Revenue</div>
              <div className="apr-27-22">Mar 1, 22</div>
            </div>
            <img className="icon" alt="" src="/icon.svg" />
          </div>
          <div className="div11">+ $126</div>
        </div>
        <div className="item-container">
          <div className="item2">
            <div className="withdrawal-initiated-parent">
              <div className="order-revenue">Withdrawal Initiated</div>
              <div className="apr-27-22">Apr 25, 22</div>
            </div>
            <img className="icon" alt="" src="/icon1.svg" />
          </div>
          <div className="div12">- $2490</div>
        </div>
      </div>
      <div className="history-transactions-parent">
        <div className="history-transactions">History Transactions</div>
        <div className="view-all">View all</div>
      </div>
    </div>
  );
};

export default HistoryTransactions;
