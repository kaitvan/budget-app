const SetupCategory = ({ category }) => {
  return (
    <div className="budget-category">
      <p>{category.label}</p>
      <p>${category.monthlyBudget.toFixed(2)}</p>
    </div>
  );
};

export default SetupCategory;
