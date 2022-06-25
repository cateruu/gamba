// styles
import classes from './css/slot.module.css';
// components
import Cylinder from './Cylinder';

const Slot = () => {
  return (
    <section className={classes.container}>
      <Cylinder />
      <Cylinder />
      <Cylinder />
    </section>
  );
};

export default Slot;
