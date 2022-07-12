import Card from "./components/UI/Card";
import ExpensesItems from "./components/Expenses/ExpensesItems";
import './components/Expenses/Expenses.css';
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
// import { useState } from "react/cjs/react.production.min";
import { useState } from "react/cjs/react.development";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [filterYear, setFilterYear] = useState('2019')
  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  }

  return (
    <>
    <NewExpense />
    <Card className="expenses">
    <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
      {/* Attribute can be anything */}
      <ExpensesItems
        title={expenses[0].title} 
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpensesItems
        title={expenses[1].title} 
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpensesItems
        title={expenses[2].title} 
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpensesItems
        title={expenses[3].title} 
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
    </>
  );
}

export default App;
