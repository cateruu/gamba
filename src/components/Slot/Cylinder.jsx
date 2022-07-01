import { useContext } from 'react';
// context
import { RollContext } from '../../App';
// styles
import classes from './css/cylinder.module.css';
// utils
import images from '../../utils/images.json';
import { shuffle } from '../../utils/shuffle';

const Cylinder = ({ id }) => {
  const { isRolling, cylinders, newReels } = useContext(RollContext);

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
  shuffle(symbols);

  let symbolElements = [];
  for (let i = 0; i < 3; i++) {
    symbolElements.push(symbols[i]);
  }

  newReels.current = true;
  return (
    <div className={classes.cylinder}>
      <div
        className={`${classes.container} ${isRolling ? classes.roll : null}`}
        ref={cylinders[id]}
      >
        {isRolling ? symbols : symbolElements}
      </div>
    </div>
  );
};

export default Cylinder;
