import React, { useState } from 'react';
// styles
import classes from './css/app.module.css';
// components
import Slot from './components/Slot/Slot';
import Info from './components/Info/Info';

export const RollContext = React.createContext();

const App = () => {
  const [isRolling, setIsRolling] = useState(false);
  console.log(isRolling);

  return (
    <main className={classes.main}>
      <h1 className={classes.header}>GAMBA</h1>
      <RollContext.Provider value={{ isRolling, setIsRolling }}>
        <Slot />
        <Info />
      </RollContext.Provider>
    </main>
  );
};

export default App;
