import "./Header.scss";

import Button from "../Button/Button";
import ButtonRev from "../ButtonRev/ButtonRev";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="btnGrp">
        <Button title="add budget" />
        <ButtonRev title="add expense" />
      </div>
    </div>
  );
};

export default Header;
