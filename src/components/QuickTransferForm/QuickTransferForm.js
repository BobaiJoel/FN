import "./QuickTransferForm.css";
const QuickTransferForm = () => {
  return (
    <div className="quick-transfer-parent">
      <div className="quick-transfer">Quick Transfer</div>
      <div className="card-number-parent">
        <div className="card-number">Card Number</div>
        <div className="form">
          <div className="parent">
            <div className="div">1234 2345 7379 90</div>
            <img className="vector-icon" alt="" src="/vector-3.svg" />
          </div>
        </div>
      </div>

      <div className="frame-parent4">
        <div className="ellipse-parent">
          <div className="frame-child1" />
          <div className="frame-child1" />
          <div className="frame-child1" />
          <div className="frame-child1" />
          <img className="ellipse-icon" alt="" src="/ellipse-1.svg" />
        </div>
        <img className="frame-icon4" alt="" src="/frame2.svg" />
      </div>
      <div className="frame-parent3">
        <div className="send-money-wrapper">
          <div className="send-money">Send money</div>
        </div>
        <div className="save-as-draft-wrapper">
          <div className="save-as-draft">Save as Draft</div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransferForm;
