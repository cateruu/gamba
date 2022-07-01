// styles
import classes from './css/help.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Help = ({ handleClick }) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>HOW TO PLAY</h1>
      <FontAwesomeIcon
        icon={faCircleXmark}
        className={classes.close}
        onClick={handleClick}
      />
    </div>
  );
};

export default Help;
