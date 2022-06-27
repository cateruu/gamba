import React, { useState } from 'react';
// styles
import classes from './css/app.module.css';
// components
import Slot from './components/Slot/Slot';
import Info from './components/Info/Info';

export const RollState = React.createContext();

const App = () => {
  const [isRolling, setIsRolling] = useState(false);

  return (
    <main className={classes.main}>
      <h1 className={classes.header}>GAMBA</h1>
      <RollState.Provider value={setIsRolling}>
        <Slot />
        <Info />
      </RollState.Provider>
    </main>
  );
};

export default App;
