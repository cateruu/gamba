import { useState, useEffect, useContext } from 'react';
// context
import { RollContext } from '../Slot/Slot';
// styles
import classes from './css/info.module.css';
// components
import Credit from './Credit';
import Bet from './Bet';
import Text from './Text';
import Roll from './Roll';
// utils
import { getSymbolsArr } from '../../utils/getSymbolsArr';
import { getWinningSymbols } from '../../utils/getWinningSymbols';
import { win } from '../../utils/win';
import { lose } from '../../utils/lose';
import images from '../../utils/images.json';
import ReactHowler from 'react-howler';
// sounds
import winSound from '../../sounds/win.mp3';

const Info = () => {
  const { cylinders, isRolling, firstTime, newReels } = useContext(RollContext);
  const [credits, setCredits] = useState(500);
  const [winAmount, setWinAmount] = useState(0);
  const [betAmount, setBetAmount] = useState(0);
  const [betIncrease, setBetIncrease] = useState(0);
  const [text, setText] = useState({
    text: '',
  });
  const [playingWin, setPlayingWin] = useState(false);
  const [playingRoll, setPlayingRoll] = useState(false);

  const sound = new ReactHowler({
    src: winSound,
    html5: true,
    playing: playingWin,
    volume: 0.3,
  });

  useEffect(() => {
    setPlayingWin(false);
    setPlayingRoll(false);
    if (newReels.current) {
      const cylindersArr = getSymbolsArr(cylinders);
      const winningSymbols = getWinningSymbols(cylindersArr);

      let symbolImg = [];
      if (winningSymbols) {
        images.forEach((image, id) => {
          if (winningSymbols.includes(image.name)) {
            symbolImg.push(<img key={id} src={image.path} alt={image.name} />);
          }
        });
      }

      if (winningSymbols && !isRolling && !firstTime) {
        setWinAmount(win(winningSymbols, betAmount));
        setCredits((prevState) => (prevState += winAmount));
      } else {
        setWinAmount(0);
      }

      if (winAmount && !isRolling && !firstTime) {
        setText({
          text: `WIN $${winAmount}`,
          images: symbolImg,
        });
        setPlayingWin(true);
      }
      if (!winAmount && !isRolling && !firstTime) {
        setText({
          text: lose(),
        });
      }
    }
  }, [
    cylinders,
    betAmount,
    setText,
    setCredits,
    isRolling,
    winAmount,
    firstTime,
    newReels,
  ]);

  useEffect(() => {
    newReels.current = false;
  }, [winAmount, newReels]);

  return (
    <>
      <ReactHowler {...sound.props} />
      <section className={classes.info}>
        <div className={classes.betContainer}>
          <Credit credits={credits} />
          <Bet
            betAmount={betAmount}
            setBetAmount={setBetAmount}
            betIncrease={betIncrease}
            setBetIncrease={setBetIncrease}
          />
        </div>
        <Text text={text} />
        <Roll
          credits={credits}
          setCredits={setCredits}
          betAmount={betAmount}
          setBetIncrease={setBetIncrease}
          setText={setText}
          playingRoll={playingRoll}
          setPlayingRoll={setPlayingRoll}
          setPlayingWin={setPlayingWin}
        />
      </section>
    </>
  );
};

export default Info;
