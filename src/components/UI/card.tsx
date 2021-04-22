import classes from './card.module.css';

interface CardProps {
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <section className={`${classes.card} ${className}`}>
    {children}
  </section>
);

export default Card;