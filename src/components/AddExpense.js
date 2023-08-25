import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const AddExpense = ({ categories }) => {
  const [showForm, setShowForm] = useState(false);

  const clickHandler = () => {
    setShowForm(true);
  };

  return (
    <div className="add-expense" onClick={clickHandler}>
      {showForm ? <ExpenseForm categories={categories} /> : <p>Add expense</p>}
    </div>
  );
};

export default AddExpense;
