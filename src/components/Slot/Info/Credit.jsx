// styles
import classes from './css/credit.module.css';

const Credit = ({ credits }) => {
  return (
    <div className={classes.credit}>
      CREDIT <span className={classes.amount}>${credits}</span>
    </div>
  );
};

export default Credit;
