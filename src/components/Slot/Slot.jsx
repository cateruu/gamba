import React, { useState, useRef } from 'react';
// styles
import classes from './slot.module.css';
// components
import Reels from './Reels/Reels';
import Info from './Info/Info';
import HelpBtn from '../Help/HelpBtn';

export const RollContext = React.createContext();

const Slot = () => {
  const [firstTime, setFirstTime] = useState(true);
  const [isRolling, setIsRolling] = useState(false);
  const cylinders = [useRef(), useRef(), useRef()];
  const newReels = useRef(false);

  return (
    <>
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
        <Reels />
        <Info />
      </RollContext.Provider>
    </>
  );
};

export default Slot;
