import { useState } from "react";

import SetupForm from "./components/SetupForm";
import Header from "./components/Header";
import Budget from "./components/Budget";
import Navigation from "./components/Navigation";
import AddExpense from "./components/AddExpense";

let INITIAL_CATEGORIES = [
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

let now = new Date(Date.now());
let date = now.getDate();
let month = now.getMonth();
let year = now.getYear();

const daysInMonths = {
  1: 31,
  2: (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28,
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

let daysThisMonth = daysInMonths[month];

function App() {
  const [categories, setCategories] = useState([]);
  const [isEditing, setIsEditing] = useState(true);

  const calculateMoneyAvailable = (newCategory) => {
    let spent = 0;
    if (newCategory.expenses.length > 0) {
      spent = newCategory.expenses.reduce((a, b) => a + b);
    }
    return newCategory.dailyBudget * date - spent;
  };

  const onLogExpense = (expense) => {
    const index = categories.findIndex(
      (category) => expense.category === category.label
    );
    const nextCategories = categories.map((category, i) => {
      if (i === index) {
        category.expenses = [...category.expenses, expense.amount];
        category.moneyAvailable = calculateMoneyAvailable(category);
      }
      return category;
    });
    setCategories(nextCategories);
  };

  const addNewCategory = (newCategory) => {
    newCategory = {
      ...newCategory,
      moneyAvailable: calculateMoneyAvailable(newCategory),
    };
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="app">
      <Navigation
        onHomeClick={stopEditingHandler}
        onSettingsClick={startEditingHandler}
      />
      {isEditing ? (
        <SetupForm
          onAddNewCategory={addNewCategory}
          categories={categories}
          daysThisMonth={daysThisMonth}
        />
      ) : (
        <div className="center">
          <Header categories={categories} />
          <Budget categories={categories} />
          <AddExpense categories={categories} onLogExpense={onLogExpense} />
        </div>
      )}
    </div>
  );
}

export default App;
