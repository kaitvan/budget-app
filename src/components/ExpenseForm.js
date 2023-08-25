const ExpenseForm = ({ categories }) => {
  const formSubmitHandler = () => {
    console.log("submitted");
  };
  return (
    <form onSubmit={formSubmitHandler} className="expense-form">
      <div className="form-group">
        <label for="category">Category</label>
        <select className="form-control form-input" id="category">
          <option value={categories[0].label}>{categories[0].label}</option>
          <option value={categories[1].label}>{categories[1].label}</option>
          <option value={categories[2].label}>{categories[2].label}</option>
          <option value={categories[3].label}>{categories[3].label}</option>
          <option value={categories[4].label}>{categories[4].label}</option>
        </select>
      </div>
      <div className="form-group">
        <label for="description">Description</label>
        <input
          className="form-control form-input"
          type="text"
          id="description"
        />
      </div>
      <div className="form-group">
        <label for="amount">Amount</label>
        <input className="form-control form-input" type="number" id="amount" />
      </div>
      <button type="submit" className="btn submit-btn">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
