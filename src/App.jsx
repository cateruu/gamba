// styles
import classes from './css/app.module.css';
// components
import Slot from './components/Slot/Slot';
import Info from './components/Info/Info';

const App = () => {
  return (
    <main className={classes.main}>
      <h1 className={classes.header}>GAMBA</h1>
      <Slot />
      <Info />
    </main>
  );
};

export default App;
