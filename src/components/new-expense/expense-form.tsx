import { useState } from 'react';
import classes from './expense-form.module.css';

export interface ExpenseFormData {
  title: string;
  amount: string;
  date: string;
}

interface ExpenseFormProps {
  onSaveExpenseData: (expenseData: ExpenseFormData) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSaveExpenseData({ title, amount, date });
    setTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className={classes.control}>
          <label>Amount</label>
          <input 
            type="number" 
            min="0.01" 
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} 
            onBlur={(e) => setAmount(Number(e.target.value).toFixed(2))}
          />
        </div>
        <div className={classes.control}>
          <label>Date</label>
          <input 
            type="date" 
            min="2019-01-01" 
            max="2022-12-31"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;