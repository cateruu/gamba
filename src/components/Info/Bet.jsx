import classes from './css/bet.module.css';

const betAmounts = [1, 5, 10, 20, 40, 50, 80, 100];

const Bet = () => {
  return (
    <div className={classes.bet}>
      BET <span className={classes.amount}>$100</span>
    </div>
  );
};

export default Bet;
