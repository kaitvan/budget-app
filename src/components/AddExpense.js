import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const AddExpense = ({ categories }) => {
  const [showForm, setShowForm] = useState(false);

  const clickHandler = () => {
    setShowForm(true);
  };

  const onSubmitExpense = (expense) => {
    setShowForm(false);
    console.log(expense);
  };

  return (
    <div className="add-expense" onClick={clickHandler}>
      {showForm ? (
        <ExpenseForm
          categories={categories}
          onSubmitExpense={onSubmitExpense}
        />
      ) : (
        <p>Add expense</p>
      )}
    </div>
  );
};

export default AddExpense;
