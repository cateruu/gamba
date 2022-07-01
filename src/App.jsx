import React, { useState, useRef } from 'react';
// styles
import classes from './css/app.module.css';
// components
import Reels from './components/Slot/Reels/Reels';
import Info from './components/Slot/Info/Info';
import HelpBtn from './components/Help/HelpBtn';
import Help from './components/Help/Help';
import Slot from './components/Slot/Slot';

export const RollContext = React.createContext();

const App = () => {
  const [firstTime, setFirstTime] = useState(true);
  const [isRolling, setIsRolling] = useState(false);
  const cylinders = [useRef(), useRef(), useRef()];
  const newReels = useRef(false);
  const [showHelp, setShowHelp] = useState(false);

  return (
    <main className={classes.main}>
      {showHelp}
      <Slot />
    </main>
  );
};

export default App;
