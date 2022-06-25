// styles
import classes from './css/slot.module.css';
// components
import Cylinder from './Cylinder';

const Slot = () => {
  return (
    <div className={classes.container}>
      <Cylinder />
      <Cylinder />
      <Cylinder />
    </div>
  );
};

export default Slot;
