import Header from "./components/Header";
import Budget from "./components/Budget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import AddExpense from "./components/AddExpense";

function App() {
  const daysInMonths = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  let now = new Date(Date.now());
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getYear();
  let daysThisMonth = daysInMonths[month];

  const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  };

  if (isLeapYear(year)) {
    daysInMonths[2] = 29;
  }

  let categories = [
    {
      id: 0,
      label: "Entertainment",
      monthlyBudget: 150,
      expenses: [20, 10],
    },
    {
      id: 1,
      label: "Food & Drink",
      monthlyBudget: 300,
      expenses: [5, 10, 2],
    },
    {
      id: 2,
      label: "Household",
      monthlyBudget: 100,
      expenses: [3, 5],
    },
    {
      id: 3,
      label: "Education",
      monthlyBudget: 200,
      expenses: [20, 60],
    },
    {
      id: 4,
      label: "Auto & Transport",
      monthlyBudget: 200,
      expenses: [84, 27, 15],
    },
  ];

  categories.forEach((category) => {
    category.dailyBudget = category.monthlyBudget / daysThisMonth;
  });

  categories.forEach((category) => {
    const spent = category.expenses.reduce((a, b) => a + b);
    category.moneyAvailable = category.dailyBudget * date - spent;
  });

  return (
    <div className="app">
      <nav>
        <FontAwesomeIcon icon={faHouse} className="icon" />
        <FontAwesomeIcon icon={faGear} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
      </nav>
      <div className="center">
        <Header categories={categories} />
        <Budget categories={categories} />
        <AddExpense categories={categories} />
      </div>
    </div>
  );
}

export default App;
