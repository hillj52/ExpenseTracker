import ExpenseForm from './expense-form';
import { ExpenseFormData } from './expense-form';
import { Expense } from '../../App';
import classes from './new-expense.module.css';

interface NewExpenseProps {
  onAddExpense: (expense: Expense) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({ onAddExpense }) => {

  const saveExpenseDataHandler = (expenseData: ExpenseFormData) => {
    const expense = {
      id: Math.random().toString(),
      title: expenseData.title,
      amount: Number(expenseData.amount),
      date: new Date(expenseData.date),
    }
    onAddExpense(expense);
  }

  return (
    <section className={classes['new-expense']}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </section>
  )
}

export default NewExpense;