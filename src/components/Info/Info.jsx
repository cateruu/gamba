// styles
import classes from './css/info.module.css';
// components
import Credit from './Credit';
import Bet from './Bet';
import Text from './Text';
import Roll from './Roll';

const Info = () => {
  return (
    <section className={classes.info}>
      <div className={classes.betContainer}>
        <Credit />
        <Bet />
      </div>
      <Text />
      <Roll />
    </section>
  );
};

export default Info;
