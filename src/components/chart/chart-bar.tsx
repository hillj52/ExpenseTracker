import classes from './chart-bar.module.css';

interface ChartBarProps {
  value: number;
  label: string;
  max: number;
}

const ChartBar: React.FC<ChartBarProps> = ({ value, label, max }) => (
  <section className={classes.bar}>
    <div className={classes.inner}>
      <div 
        className={classes.fill}
        style={{ height: (max > 0) ? `${Math.round((value / max) * 100)}%` : '0%' }}
      ></div>
    </div>
    <div className={classes.label}>{label}</div>
  </section>
)

export default ChartBar;