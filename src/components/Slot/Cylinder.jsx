// styles
import classes from './css/cylinder.module.css';
// utils
import images from '../../utils/images.json';
import { shuffle } from '../../utils/shuffle';

const Cylinder = () => {
  const imagesElements = images.map((image, id) => {
    return (
      <img
        key={id}
        src={image.path}
        alt={image.name}
        className={classes.image}
      />
    );
  });

  return <div className={classes.cylinder}>{shuffle(imagesElements)}</div>;
};

export default Cylinder;
