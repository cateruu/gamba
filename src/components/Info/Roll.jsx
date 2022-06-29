import { useContext } from 'react';
// context
import { RollContext } from '../../App';
// styles
import classes from './css/roll.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseClock, faRotate } from '@fortawesome/free-solid-svg-icons';

const Roll = (props) => {
  const { isRolling, setIsRolling } = useContext(RollContext);
  const roll = () => {
    setIsRolling(true);
    props.setCredits((prevState) => prevState - props.betAmount);

    setTimeout(() => setIsRolling(false), 700);
  };

  const setBetAmount = (action) => {
    switch (action) {
      case '+':
        props.setBetIncrease((prevState) => ++prevState);
        break;
      case '-':
        props.setBetIncrease((prevState) => --prevState);
        break;
      default:
        console.error('unexpected error in setting amount');
        break;
    }
  };

  return (
    <div className={classes.container}>
      <span className={classes.amount} onClick={() => setBetAmount('-')}>
        -
      </span>
      <FontAwesomeIcon
        icon={faRotate}
        className={classes.roll}
        onClick={isRolling ? null : roll}
      />
      <span className={classes.amount} onClick={() => setBetAmount('+')}>
        +
      </span>
    </div>
  );
};

export default Roll;
