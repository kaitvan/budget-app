import { useState } from "react";

const ExpenseForm = ({ categories, onSubmitExpense }) => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const expense = {
      category: category,
      description: description,
      amount: Number(amount),
    };

    setCategory("");
    setDescription("");
    setAmount("");

    onSubmitExpense(expense);
  };
  return (
    <form onSubmit={formSubmitHandler} className="expense-form">
      <div className="form-group">
        <label>Category</label>
        <select
          className="form-control form-input"
          onChange={categoryChangeHandler}
          value={category}
        >
          <option value={categories[0].label}>{categories[0].label}</option>
          <option value={categories[1].label}>{categories[1].label}</option>
          <option value={categories[2].label}>{categories[2].label}</option>
          <option value={categories[3].label}>{categories[3].label}</option>
          <option value={categories[4].label}>{categories[4].label}</option>
        </select>
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          className="form-control form-input"
          type="text"
          value={description}
          onChange={descriptionChangeHandler}
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          className="form-control form-input"
          type="number"
          value={amount}
          onChange={amountChangeHandler}
        />
      </div>
      <button type="submit" className="btn submit-btn">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
