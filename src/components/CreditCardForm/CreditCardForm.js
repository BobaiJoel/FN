import { useAuthStore } from "./../../store/store";
import "./CreditCardForm.css";
const CreditCardForm = () => {
  let user = useAuthStore((state) => {
    return state.auth.user;
  });
  return (
    <div className="credit-card-mockup">
      <img className="lines-icon" alt="" src="/lines.svg" />
      <img className="payment-method-icon" alt="" src="/pngwing.png" />
      <div className="text">
        <span className="saku">Plains</span>
        <span>Capital</span>
      </div>
      <div className="card-number-group">
        <div className="card-number1">5362 3263 0933 2377</div>
        <div className="cardholder">{`${user?.name}`}</div>
        <div className="expiry">06/24</div>
      </div>
      <img className="paypass-icon" alt="" src="/paypass-icon.svg" />
    </div>
  );
};

export default CreditCardForm;
