import "./App.css";
import Header from "./components/Header";
import Budget from "./components/Budget";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Budget />
      <ExpenseForm />
    </div>
  );
}

export default App;
