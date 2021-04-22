import { useState } from 'react';
import Card from '../UI/card';
import { Expense } from '../../App';
import classes from './expenses.module.css';
import ExpensesFilter from './expenses-filter';
import ExpensesList from './expenses-list';
import ExpensesChart from './expenses-chart';

interface ExpensesProps {
  expenses: Expense[];
}

const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  
  const [year, setYear] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const filterChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterYear = event.target.value;
    setYear(filterYear);
    if (filterYear === '') {
      setFilteredExpenses(expenses);
    } else {
      setFilteredExpenses(expenses.filter(({ date }) => (date.getFullYear().toString() === filterYear)));
    }
  }

  return (
    <Card className={classes.expenses}>
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>

  )
;}

export default Expenses;