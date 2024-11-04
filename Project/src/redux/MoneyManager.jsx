import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome } from '../feature/incomeSlice';
import { addExpense } from '../feature/expenceSlice';

export default function MoneyManager() {
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [description, setDescription] = useState('');

  const incomeAmt = useSelector((state) => state.incomeKey.data1) || 0;
  const expense1 = useSelector((state) => state.expenseKey.expense1) || [];
  const dispatch = useDispatch();

  const handleAmount = () => {
    if (income) {
      dispatch(addIncome(income));
      setIncome('');
    }
  };

  const handleExpense = () => {
    dispatch(addExpense({ expense, description }));
    setExpense('');
    setDescription('');
  };

  return (
    <div className="moneyManagerContainer">
      <h1 className="appTitle">Money Manager</h1>

      <div className="incomeSection">
        <input type="number" className="inputField incomeInput" placeholder="Income" value={income} onChange={(e) => setIncome(e.target.value)} />
        <button className="actionButton addIncomeBtn" onClick={handleAmount}>Add Income</button>
        <p className="budgetDisplay">Your Budget: {incomeAmt}</p>
      </div>
      <div className="expenseSection">
        <input type="number" className="inputField expenseInput" placeholder="Expense Amount" value={expense} onChange={(e) => setExpense(e.target.value)} />
        <input type="text" className="inputField descriptionInput" placeholder="Expense Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button className="actionButton addExpenseBtn" onClick={handleExpense}>Add Expense</button>
      </div>
      <div className="expenseListContainer">
        {expense1.map((e, i) => (
          <div className="expenseItem" key={i}>
            <p className="expenseAmount">Amount: {e.expense}</p>
            <p className="expenseDescription">Description: {e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}