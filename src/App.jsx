import React, { useState } from 'react';
// styles
import classes from './css/app.module.css';
// components
import Help from './components/Help/Help';
import Slot from './components/Slot/Slot';

const App = () => {
  const [showHelp, setShowHelp] = useState(false);

  return <main className={classes.main}>{showHelp ? <Help /> : <Slot />}</main>;
};

export default App;
