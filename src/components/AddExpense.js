import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const AddExpense = ({ categories, onLogExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const clickHandler = () => {
    setShowForm(true);
  };

  const onSubmitExpense = (expense) => {
    setShowForm(false);
    onLogExpense(expense);
  };

  return (
    <div className="add-expense" onClick={clickHandler}>
      {showForm ? (
        <ExpenseForm
          categories={categories}
          onSubmitExpense={onSubmitExpense}
        />
      ) : (
        <>
          <FontAwesomeIcon icon={faCirclePlus} />
          <p>Add expense</p>
        </>
      )}
    </div>
  );
};

export default AddExpense;
