// styles
import classes from './css/text.module.css';

const Text = ({ text }) => {
  return (
    <div className={classes.text}>
      <div className={classes.images}>{text.images} </div>
      {text.text}
    </div>
  );
};

export default Text;
