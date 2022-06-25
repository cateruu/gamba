// styles
import classes from './css/roll.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const Roll = () => {
  return (
    <div className={classes.container}>
      <span className={classes.amount}>-</span>
      <FontAwesomeIcon icon={faRotate} className={classes.roll} />
      <span className={classes.amount}>+</span>
    </div>
  );
};

export default Roll;
