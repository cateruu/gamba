import { useContext } from 'react';
// context
import { RollContext } from '../Slot/Slot';
// styles
import classes from './css/roll.module.css';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
// utils
import ReactHowler from 'react-howler';
// sounds
import rollSound from '../../sounds/roll.flac';

const Roll = ({
  credits,
  setCredits,
  betAmount,
  setBetIncrease,
  setText,
  playingRoll,
  setPlayingRoll,
  setPlayingWin,
}) => {
  const { isRolling, setIsRolling, setFirstTime } = useContext(RollContext);

  const sound = new ReactHowler({
    src: rollSound,
    html5: true,
    playing: playingRoll,
    volume: 0.6,
  });

  const roll = () => {
    if (credits < betAmount) {
      setText(`Not enought credits!`);
      return;
    }

    setPlayingWin(false);
    setPlayingRoll(true);
    setFirstTime(false);
    setText({ text: '' });
    setIsRolling(true);
    setCredits((prevState) => prevState - betAmount);

    setTimeout(() => setIsRolling(false), 1000);
  };

  const setBetAmount = (action) => {
    switch (action) {
      case '+':
        setBetIncrease((prevState) => ++prevState);
        break;
      case '-':
        setBetIncrease((prevState) => --prevState);
        break;
      default:
        console.error('unexpected error in setting amount');
        break;
    }
  };

  return (
    <div className={classes.container}>
      <ReactHowler {...sound.props} />
      <span
        className={classes.amount}
        onClick={() => (isRolling ? null : setBetAmount('-'))}
      >
        -
      </span>
      <FontAwesomeIcon
        icon={faRotate}
        className={classes.roll}
        onClick={isRolling ? null : roll}
      />
      <span
        className={classes.amount}
        onClick={() => (isRolling ? null : setBetAmount('+'))}
      >
        +
      </span>
    </div>
  );
};

export default Roll;
