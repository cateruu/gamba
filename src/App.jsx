import React, { useState } from 'react';
// styles
import classes from './css/app.module.css';
// components
import Help from './components/Help/Help';
import Slot from './components/Slot/Slot';

const App = () => {
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
    </main>
  );
};

export default App;
