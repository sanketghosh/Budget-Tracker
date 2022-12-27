const ProgressBar = ({ yourExpense, maxBudget }) => {
  const ratio = yourExpense / maxBudget;

  const setColorFunc = (ratio) => {
    if (ratio <= 0.5) return "#3b7ae7";
    if (ratio <= 0.75) return "#f69001";
    return "#f34545";
  };

  const progBar = {
    height: "15px",
    background: "#3333333e",
    width: `100%`,
    borderRadius: "50px",
    position: "relative",
  };

  const animationDiv = {
    maxWidth: "100%",
    borderRadius: "50px",
    height: "100%",
    width: `${ratio * 100}%`,
    background: setColorFunc(ratio),
    transition: "1s ease 0.3s",
    overflow: "hidden",
  };

  return (
    <div style={progBar}>
      <div style={animationDiv}></div>
    </div>
  );
};

export default ProgressBar;
