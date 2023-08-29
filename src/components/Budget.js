import BudgetCategory from "./BudgetCategory";

const Budget = ({ categories }) => {
  return (
    <div className="budget-container">
      {categories.map((category) => (
        <BudgetCategory category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Budget;
