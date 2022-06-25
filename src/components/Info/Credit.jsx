import classes from './css/credit.module.css';

const Credit = () => {
  return (
    <div className={classes.credit}>
      CREDIT <span className={classes.amount}>$20000</span>
    </div>
  );
};

export default Credit;
