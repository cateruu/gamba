import { useEffect } from 'react';
// styles
import classes from './css/bet.module.css';

const betAmounts = [1, 5, 10, 20, 40, 50, 80, 100];

const Bet = ({ betAmount, setBetAmount, betIncrease, setBetIncrease }) => {
  useEffect(() => {
    let betIndex = betIncrease;

    if (betIndex > 7) betIndex = 7;
    else if (betIndex < 0) betIndex = 0;

    setBetIncrease(betIndex);
    setBetAmount(betAmounts[betIndex]);
  }, [betIncrease, setBetAmount]);

  return (
    <div className={classes.bet}>
      BET <span className={classes.amount}>${betAmount}</span>
    </div>
  );
};

export default Bet;
