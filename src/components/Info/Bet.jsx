import classes from './css/bet.module.css';

const Bet = () => {
  return (
    <div className={classes.bet}>
      BET <span className={classes.amount}>$100</span>
    </div>
  );
};

export default Bet;
