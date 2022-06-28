import React, { useState, useRef, useEffect, useMemo } from 'react';
// styles
import classes from './css/app.module.css';
// components
import Slot from './components/Slot/Slot';
import Info from './components/Info/Info';

export const RollContext = React.createContext();

const App = () => {
  const [isRolling, setIsRolling] = useState(false);
  const cylinders = [useRef(), useRef(), useRef()];
  const [winSymbol, setWinSymbol] = useState(null);

  // if (cylinders[0].current !== undefined) {
  //   const children = cylinders[0].current.children;
  // }

  useEffect(() => {
    const cylindersArr = cylinders.map((cylinder) => {
      const cylindersArr = Array.from(cylinder.current.children);

      return cylindersArr.map((symbol) => symbol.alt);
    });

    let symbols = {};
    for (let cylinder of cylindersArr) {
      for (let symbol of cylinder) {
        if (symbol in symbols) {
          symbols[symbol] += 1;
        } else {
          symbols[symbol] = 1;
        }
      }
    }

    console.log(symbols);
  }, [cylinders]);

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
