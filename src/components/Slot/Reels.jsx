// styles
import classes from './css/reels.module.css';
// components
import Reel from './Reel';

const Reels = () => {
  return (
    <section className={classes.container}>
      <Reel id={0} />
      <Reel id={1} />
      <Reel id={2} />
    </section>
  );
};

export default Reels;
