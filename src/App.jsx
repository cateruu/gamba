import React, { useState, useRef, useEffect } from 'react';
// styles
import classes from './css/app.module.css';
// components
import Slot from './components/Slot/Slot';
import Info from './components/Info/Info';
// utils
import { getSymbolsArr } from './utils/getSymbolsArr';
import { getSymbolsCount } from './utils/getSymbolsCount';

export const RollContext = React.createContext();

const App = () => {
  const [isRolling, setIsRolling] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cylinders = [useRef(), useRef(), useRef()];
  const winSymbols = useRef(null);

  useEffect(() => {
    const cylindersArr = getSymbolsArr(cylinders);
    const symbols = getSymbolsCount(cylindersArr);

    let win = [];
    for (let [key, value] of Object.entries(symbols)) {
      if (value === 3) win.push(key);
    }

    winSymbols.current = win;
  }, [cylinders]);

  console.log(winSymbols);

  return (
    <main className={classes.main}>
      <h1 className={classes.header}>GAMBA</h1>
      <RollContext.Provider value={{ isRolling, setIsRolling, cylinders }}>
        <Slot />
        <Info />
      </RollContext.Provider>
    </main>
  );
};

export default App;
