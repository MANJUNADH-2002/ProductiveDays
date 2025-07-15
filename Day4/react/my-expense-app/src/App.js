import ExpenseItem from './ExpenseItem';
import logo from './logo.svg'; // Default logo import

function App() {
  const expenses = [
    { title: "Groceries", description: "Weekly shopping", amount: 300, date: new Date(2023, 9, 1) },
    { title: "Electricity Bill", description: "Monthly bill", amount: 120, date: new Date(2023, 9, 2) },
    { title: "Internet Bill", description: "Monthly bill", amount: 60, date: new Date(2023, 9, 3) },
    { title: "Rent", description: "Monthly rent payment", amount: 1500, date: new Date(2023, 9, 4) }
  ];

  return (
    <div>
      <h1>Hi, this is Manjunadh</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount}></ExpenseItem>
    </div>
  );
}

export default App;