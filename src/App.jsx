import React, { useState } from 'react';
// styles
import classes from './css/app.module.css';
// components
import Slot from './components/Slot/Slot';
import Help from './components/Help/Help';

const App = () => {
  const [showHelp, setShowHelp] = useState(false);

  const help = () => {
    setShowHelp((prevState) => !prevState);
  };

  return (
    <main className={`${classes.main} ${showHelp ? classes.help : null}`}>
      {showHelp && <Help handleClick={help} />}
      <Slot handleClick={help} showHelp={showHelp} />
    </main>
  );
};

export default App;
