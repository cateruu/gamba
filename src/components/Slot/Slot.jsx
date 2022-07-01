// styles
import classes from './css/slot.module.css';
// components
import Cylinder from './Cylinder';

const Slot = (props) => {
  return (
    <section className={classes.container}>
      <Cylinder id={0} />
      <Cylinder id={1} />
      <Cylinder id={2} />
    </section>
  );
};

export default Slot;
