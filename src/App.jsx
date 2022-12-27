//importing scss
import "./App.scss";
import Card from "./components/Card/Card";

//importing components
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="cardGrp">
        <Card title="Netflix" yourExpense={600} maxBudget={1000} />
      </div>
    </div>
  );
};

export default App;
