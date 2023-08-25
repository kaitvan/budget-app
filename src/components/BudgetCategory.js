const BudgetCategory = ({ category }) => {
  return (
    <div className="budget-category">
      <p>{category.label}</p>
      <p>${category.moneyAvailable.toFixed(2)}</p>
    </div>
  );
};

export default BudgetCategory;
