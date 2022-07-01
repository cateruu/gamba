import { useContext } from 'react';
// context
import { RollContext } from '../Slot/Slot';
// styles
import classes from './css/roll.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const Roll = ({ credits, setCredits, betAmount, setBetIncrease, setText }) => {
  const { isRolling, setIsRolling, setFirstTime } = useContext(RollContext);
  const roll = () => {
    if (credits < betAmount) {
      setText(`Not enought credits!`);
      return;
    }

    setFirstTime(false);
    setText({ text: '' });
    setIsRolling(true);
    setCredits((prevState) => prevState - betAmount);

    setTimeout(() => setIsRolling(false), 700);
  };

  const setBetAmount = (action) => {
    switch (action) {
      case '+':
        setBetIncrease((prevState) => ++prevState);
        break;
      case '-':
        setBetIncrease((prevState) => --prevState);
        break;
      default:
        console.error('unexpected error in setting amount');
        break;
    }
  };

  return (
    <div className={classes.container}>
      <span
        className={classes.amount}
        onClick={() => (isRolling ? null : setBetAmount('-'))}
      >
        -
      </span>
      <FontAwesomeIcon
        icon={faRotate}
        className={classes.roll}
        onClick={isRolling ? null : roll}
      />
      <span
        className={classes.amount}
        onClick={() => (isRolling ? null : setBetAmount('+'))}
      >
        +
      </span>
    </div>
  );
};

export default Roll;
