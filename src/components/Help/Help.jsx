// styles
import classes from './css/help.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// images
import lineExample from '../../images/line-example.png';
import multipleExample from '../../images/multiple-example.png';
// utils
import images from '../../utils/images.json';

const Help = ({ handleClick }) => {
  const symbolElements = images.map((image, id) => {
    return (
      <div key={id} className={classes.symbol}>
        <img src={image.path} alt={image.name} className={classes.image} />
        <p>{image.value}x</p>
      </div>
    );
  });

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.header}>HOW TO PLAY</h1>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={classes.close}
          onClick={handleClick}
        />
        <div className={classes.sections}>
          <div className={classes.section}>
            <h3 className={classes.sub}>LINES</h3>
            <p className={classes.text}>
              You must have 3 of the same symbol in each reel regardless of
              position.
            </p>
            <img
              src={lineExample}
              alt='line example'
              className={classes.example}
            />
          </div>
          <div className={classes.section}>
            <h3 className={classes.sub}>MULTIPLE SYMBOLS</h3>
            <p className={classes.text}>
              You can get up to 3 of the same symbols in one spin.
            </p>
            <img
              src={multipleExample}
              alt='multiple symbols example'
              className={classes.example}
            />
          </div>
          <div className={classes.section}>
            <h3 className={classes.sub}>SYMBOLS VALUE</h3>
            <div className={classes.symbols}>{symbolElements}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
