// styles
import classes from './css/text.module.css';

const Text = (props) => {
  return <div className={classes.text}>{props.text}</div>;
};

export default Text;
