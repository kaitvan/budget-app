const Header = ({ categories }) => {
  let totalSaved = 0;

  categories.forEach((category) => {
    totalSaved += category.moneyAvailable;
  });

  return (
    <header>
      <h2 className="title">${totalSaved.toFixed(2)}</h2>
      <p className="subtitle">saved this month</p>
    </header>
  );
};

export default Header;
