//importing styles
import "./Card.scss";

//importing utils
import { currencyFormatter } from "../../utils/currencyFormatter";

//importing components
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "../Button/Button";
import ButtonRev from "../ButtonRev/ButtonRev";

const Card = ({ title, yourExpense, maxBudget }) => {
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
        <ProgressBar />
        <div className="btnGroup">
          <Button />
          <ButtonRev />
        </div>
      </div>
    </div>
  );
};

export default Card;
