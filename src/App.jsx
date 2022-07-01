import React, { useState } from 'react';
// styles
import classes from './css/app.module.css';
// components
import Help from './components/Help/Help';
import Slot from './components/Slot/Slot';

const App = () => {
  const [showHelp, setShowHelp] = useState(false);

  const help = () => {
    setShowHelp((prevState) => !prevState);
    console.log(showHelp);
  };

  return (
    <main className={classes.main}>
      {showHelp ? <Help handleClick={help} /> : <Slot handleClick={help} />}
    </main>
  );
};

export default App;
