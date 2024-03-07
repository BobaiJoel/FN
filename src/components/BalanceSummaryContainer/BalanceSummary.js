import { useAuthStore } from "./../../store/store";
import BalanceContainer from "../BalanceContainer/BalanceContainer";
import IncomeContainer from "../IncomeContainer/IncomeContainer";
import "./BalanceSummary.css";
const BalanceSummary = () => {
  let user = useAuthStore((state) => {
    return state.auth.user;
  });
  return (
    <div className="summary">
      <BalanceContainer
        imageSize="/frame-18.svg"
        transactionType="My Balance"
        amount={user?.myBalance}
      />
      <IncomeContainer
        frame18="/frame-181.svg"
        income="Income"
        amount={user?.myIncome}
        up={user?.myIncomeUp}
      />
      <IncomeContainer
        frame18="/frame-182.svg"
        income="Savings"
        amount={user?.mySavings}
        up={user?.mySavingsUp}
        // propLeft="525px"
      />
      <BalanceContainer
        imageSize="/frame-183.svg"
        transactionType="Expense"
        amount={user?.myExpense}

        // propLeft="788px"
        // propWidth="87px"
      />
    </div>
  );
};

export default BalanceSummary;
