// styles
import classes from './css/app.module.css';
// components
import Slot from './components/Slot';

const App = () => {
  return (
    <div className={classes.main}>
      <h1 className={classes.header}>GAMBA</h1>
      <div className={classes.slotContainer}></div>
    </div>
  );
};

export default App;
