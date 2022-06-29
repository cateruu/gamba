import classes from './css/credit.module.css';

const Credit = (props) => {
  return (
    <div className={classes.credit}>
      CREDIT <span className={classes.amount}>${props.credits}</span>
    </div>
  );
};

export default Credit;
