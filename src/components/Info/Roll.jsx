import { useContext } from 'react';
// context
import { RollState } from '../../App';
// styles
import classes from './css/roll.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const Roll = () => {
  const setIsRolling = useContext(RollState);
  const roll = () => {
    setIsRolling((prevState) => !prevState);
  };

  return (
    <div className={classes.container}>
      <span className={classes.amount}>-</span>
      <FontAwesomeIcon
        icon={faRotate}
        className={classes.roll}
        onClick={roll}
      />
      <span className={classes.amount}>+</span>
    </div>
  );
};

export default Roll;
