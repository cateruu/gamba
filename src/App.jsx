import React, { useState, useRef } from 'react';
// styles
import classes from './css/app.module.css';
// components
import Slot from './components/Slot/Slot';
import Info from './components/Info/Info';
import HelpBtn from './components/Help/HelpBtn';

export const RollContext = React.createContext();

const App = () => {
  const [firstTime, setFirstTime] = useState(true);
  const [isRolling, setIsRolling] = useState(false);
  const cylinders = [useRef(), useRef(), useRef()];
  const newReels = useRef(false);

  return (
    <main className={classes.main}>
      <HelpBtn />
      <h1 className={classes.header}>GAMBA</h1>
      <RollContext.Provider
        value={{
          isRolling,
          setIsRolling,
          cylinders,
          firstTime,
          setFirstTime,
          newReels,
        }}
      >
        <Slot />
        <Info />
      </RollContext.Provider>
    </main>
  );
};

export default App;
