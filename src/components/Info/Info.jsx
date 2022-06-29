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

const Info = () => {
  const { cylinders } = useContext(RollContext);
  const [winSymbols, setWinSymbols] = useState(null);
  const [credits, setCredits] = useState(10000);

  useEffect(() => {
    const cylindersArr = getSymbolsArr(cylinders);
    const winningSymbols = getWinningSymbols(cylindersArr);

    setWinSymbols(winningSymbols);
  }, [cylinders]);

  return (
    <section className={classes.info}>
      <div className={classes.betContainer}>
        <Credit credits={credits} />
        <Bet setCredits={setCredits} />
      </div>
      <Text text={winSymbols} />
      <Roll />
    </section>
  );
};

export default Info;
