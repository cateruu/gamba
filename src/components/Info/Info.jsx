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
  const { cylinders, isRolling } = useContext(RollContext);
  const [credits, setCredits] = useState(200);
  const [betAmount, setBetAmount] = useState(0);
  const [betIncrease, setBetIncrease] = useState(0);
  const [text, setText] = useState(null);

  useEffect(() => {
    const cylindersArr = getSymbolsArr(cylinders);
    const winningSymbols = getWinningSymbols(cylindersArr);

    if (winningSymbols && !isRolling) {
      setCredits(
        (prevState) => (prevState += win(winningSymbols, betAmount, setText))
      );
    } else {
      lose(setText);
    }
  }, [cylinders, betAmount, setText, setCredits, isRolling]);

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
