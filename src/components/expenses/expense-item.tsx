import ExpenseDate from './expense-date';
import Card from '../UI/card';
import classes from './expense-item.module.css';

interface ExpenseItemProps {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ date, title, amount}) => (
  <Card className={classes['expense-item']}>
    <ExpenseDate date={date} />
    <div className={classes['expense-item__description']}>
      <h2>{title}</h2>
      <div className={classes['expense-item__price']}>${amount.toFixed(2)}</div>
    </div>
  </Card>
);

export default ExpenseItem;