import BudgetCategory from "./BudgetCategory";

const Budget = ({ categories }) => {
  return (
    <div className="budget-container">
      <BudgetCategory category={categories[0]} />
      <BudgetCategory category={categories[1]} />
      <BudgetCategory category={categories[2]} />
      <BudgetCategory category={categories[3]} />
      <BudgetCategory category={categories[4]} />
    </div>
  );
};

export default Budget;
