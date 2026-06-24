import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!name || !amount) return;

    setExpenses([
      ...expenses,
      {
        name,
        amount: Number(amount),
      },
    ]);

    setName("");
    setAmount("");
    const deleteExpense = (indexToDelete) => {
  setExpenses(
    expenses.filter((_, index) => index !== indexToDelete)
  );
};
  };
  const deleteExpense = (indexToDelete) => {
  setExpenses(
    expenses.filter((_, index) => index !== indexToDelete)
  );
};

  const total = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Daily Expense Analytics Dashboard</h1>

      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <button onClick={addExpense}>
        Add Expense
      </button>

      <h2>Total Expense: ₹{total}</h2>

     <ul>
  {expenses.map((item, index) => (
    <li key={index}>
      {item.name} - ₹{item.amount}

      <button onClick={() => deleteExpense(index)}>
        Delete
      </button>
    </li>
))}
    </ul>
 </div>
  );
}

export default App;