import ChartBar from './chart-bar';
import classes from './chart.module.css';

interface DataPoint {
  value: number;
  label: string;
}

interface ChartProps {
  dataPoints: DataPoint[];
}

const Chart: React.FC<ChartProps> = ({ dataPoints }) => {
  return (
    <section className={classes.chart}>
      {dataPoints.map(dataPoint => (
        <ChartBar 
          key={dataPoint.label} 
          {...dataPoint} 
          max={Math.max(...dataPoints.map(({ value }) => value))} 
        />
      ))}
    </section>
  )
}

export default Chart;