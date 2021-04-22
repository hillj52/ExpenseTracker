import classes from './expenses-filter.module.css';

interface ExpensesFilterProps {
  selected: string;
  onChangeFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ExpensesFilter: React.FC<ExpensesFilterProps> = ({ selected, onChangeFilter }) => (
  <div className={classes['expenses-filter']}>
    <div className={classes['expenses-filter__control']}>
      <label>Filter by year</label>
      <select value={selected} onChange={onChangeFilter} defaultValue=''>
        <option value=''>All Expenses</option>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
      </select>
    </div>
  </div>
);


export default ExpensesFilter;