import { useContext } from 'react';
// context
import { RollContext } from '../../App';
// styles
import classes from './css/cylinder.module.css';
// utils
import images from '../../utils/images.json';
import { shuffle } from '../../utils/shuffle';

const Cylinder = () => {
  const { isRolling } = useContext(RollContext);

  const symbols = images.map((image, id) => {
    return (
      <img
        key={id}
        src={image.path}
        alt={image.name}
        className={classes.image}
      />
    );
  });

  return (
    <div className={classes.cylinder}>
      <div
        className={`${classes.container} ${isRolling ? classes.roll : null}`}
      >
        {shuffle(symbols)}
      </div>
    </div>
  );
};

export default Cylinder;
