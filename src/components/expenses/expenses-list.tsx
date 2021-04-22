import { Expense } from '../../App';
import ExpenseItem from './expense-item';
import classes from './expenses-list.module.css';

interface ExpensesListProps {
  expenses: Expense[];
}

const ExpensesList: React.FC<ExpensesListProps> = ({ expenses }) => (
  <ul className={classes.list}>
    {expenses.length === 0 && <p className={classes.fallback}>No expenses found</p>}
      {expenses.length > 0 && expenses.map(expense => (
        <li key={expense.id}><ExpenseItem {...expense} /></li>
      ))}
  </ul>
);

export default ExpensesList;