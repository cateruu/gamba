// classes
import classes from './css/helpBtn.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const HelpBtn = ({ handleClick }) => {
  return (
    <FontAwesomeIcon
      icon={faCircleInfo}
      className={classes.button}
      onClick={handleClick}
    />
  );
};

export default HelpBtn;
