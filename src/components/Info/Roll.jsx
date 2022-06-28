import { useContext } from 'react';
// context
import { RollContext } from '../../App';
// styles
import classes from './css/roll.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const Roll = () => {
  const { isRolling, setIsRolling } = useContext(RollContext);
  const roll = () => {
    setIsRolling(true);

    setTimeout(() => setIsRolling(false), 700);
  };

  return (
    <div className={classes.container}>
      <span className={classes.amount}>-</span>
      <FontAwesomeIcon
        icon={faRotate}
        className={classes.roll}
        onClick={isRolling ? null : roll}
      />
      <span className={classes.amount}>+</span>
    </div>
  );
};

export default Roll;
