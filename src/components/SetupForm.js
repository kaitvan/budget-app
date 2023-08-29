import { useState } from "react";
import SetupCategory from "./SetupCategory";
import { v4 as uuidv4 } from "uuid";

const SetupForm = ({ onAddNewCategory, categories, daysThisMonth }) => {
  const [category, setCategory] = useState("");
  const [monthlyBudget, setMonthlyBudget] = useState("");

  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const monthlyBudgetChangeHandler = (e) => {
    setMonthlyBudget(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newCategory = {
      id: uuidv4(),
      label: category,
      monthlyBudget: Number(monthlyBudget),
      expenses: [],
      dailyBudget: monthlyBudget / daysThisMonth,
    };
    onAddNewCategory(newCategory);

    setCategory("");
    setMonthlyBudget("");
  };

  return (
    <div className="center">
      <h2>Monthly Budget Setup</h2>
      {categories.map((category) => (
        <SetupCategory category={category} key={category.id} />
      ))}
      <form onSubmit={formSubmitHandler} className="categories-form">
        <div className="form-group">
          <label>Category</label>
          <input
            className="form-control form-input"
            type="text"
            value={category}
            onChange={categoryChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Monthly Budget</label>
          <input
            className="form-control form-input"
            type="number"
            value={monthlyBudget}
            onChange={monthlyBudgetChangeHandler}
          />
        </div>
        <button type="submit" className="btn submit-btn">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default SetupForm;
