import classes from './expense-date.module.css';

interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate: React.FC<ExpenseDateProps> = ({ date }) => (
  <section className={classes['expense-date']}>
    <div className={classes['expense-date__month']}>
      {date.toLocaleString('en-US', { month: 'long' })}
    </div>
    <div className={classes['expense-date__day']}>
      {date.toLocaleString('en-US', { day: '2-digit' })}
    </div>
    <div className={classes['expense-date__year']}>
      {date.getFullYear()}
    </div>
  </section>
);

export default ExpenseDate;