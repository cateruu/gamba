import React, { useState } from 'react';
// styles
import classes from './css/app.module.css';
// components
<<<<<<< HEAD
=======
import Help from './components/Help/Help';
>>>>>>> parent of abfd1f1 (changes)
import Slot from './components/Slot/Slot';
import Info from './components/Info/Info';
import HelpBtn from './components/Help/HelpBtn';

const App = () => {
<<<<<<< HEAD
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
=======
  const [showHelp, setShowHelp] = useState(false);
  const [credits, setCredits] = useState(200);

  const help = () => {
    setShowHelp((prevState) => !prevState);
  };

  return (
    <main className={classes.main}>
      {showHelp ? (
        <Help handleClick={help} />
      ) : (
        <Slot handleClick={help} credits={credits} setCredits={setCredits} />
      )}
>>>>>>> parent of abfd1f1 (changes)
    </main>
  );
};

export default App;
