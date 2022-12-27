//importing styles
import "./Card.scss";

//importing utils
import { currencyFormatter } from "../../utils/currencyFormatter";

//importing components
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "../Button/Button";
import ButtonRev from "../ButtonRev/ButtonRev";

const Card = ({ title, yourExpense, maxBudget }) => {
  const ratio = yourExpense / maxBudget;

  const cardBg = {
    backgroundColor: "red",
  };

  return (
    <div className="card">
      <div className="cardWrapper">
        <div className="top">
          <div className="name">{title}</div>
          <div className="expenseBudget">
            <span className="yourExpense">
              {currencyFormatter.format(yourExpense)}
            </span>
            /
            <span className="maxBudget">
              {currencyFormatter.format(maxBudget)}
            </span>
          </div>
        </div>
        <ProgressBar yourExpense={yourExpense} maxBudget={maxBudget} min={0} />
        <div className="btnGroup">
          <Button title="add expense" />
          <ButtonRev title="view expense" />
        </div>
      </div>
    </div>
  );
};

export default Card;
