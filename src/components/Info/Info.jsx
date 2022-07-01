import { useState, useEffect, useContext } from 'react';
// context
import { RollContext } from '../../App';
// styles
import classes from './css/info.module.css';
// components
import Credit from './Credit';
import Bet from './Bet';
import Text from './Text';
import Roll from './Roll';
// utils
import { getSymbolsArr } from '../../utils/getSymbolsArr';
import { getWinningSymbols } from '../../utils/getWinningSymbols';
import { win } from '../../utils/win';
import { lose } from '../../utils/lose';

const Info = () => {
  const { cylinders, isRolling, firstTime, newReels, credits, setCredits } =
    useContext(RollContext);
  const [winAmount, setWinAmount] = useState(0);
  const [betAmount, setBetAmount] = useState(0);
  const [betIncrease, setBetIncrease] = useState(0);
  const [text, setText] = useState(null);

  useEffect(() => {
    if (newReels.current) {
      const cylindersArr = getSymbolsArr(cylinders);
      const winningSymbols = getWinningSymbols(cylindersArr);

      if (winningSymbols && !isRolling && !firstTime) {
        setWinAmount(win(winningSymbols, betAmount));
        setCredits((prevState) => (prevState += winAmount));
      } else {
        setWinAmount(0);
      }

      if (winAmount && !isRolling && !firstTime) {
        setText(`WIN $${winAmount}`);
      }
      if (!winAmount && !isRolling && !firstTime) {
        setText(lose());
      }
    }
  }, [
    cylinders,
    betAmount,
    setText,
    setCredits,
    isRolling,
    winAmount,
    firstTime,
    newReels,
  ]);

  useEffect(() => {
    newReels.current = false;
  }, [winAmount, newReels]);

  return (
    <section className={classes.info}>
      <div className={classes.betContainer}>
        <Credit credits={credits} />
        <Bet
          betAmount={betAmount}
          setBetAmount={setBetAmount}
          betIncrease={betIncrease}
          setBetIncrease={setBetIncrease}
        />
      </div>
      <Text text={text} />
      <Roll
        credits={credits}
        setCredits={setCredits}
        betAmount={betAmount}
        setBetIncrease={setBetIncrease}
        setText={setText}
      />
    </section>
  );
};

export default Info;
