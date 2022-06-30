export const win = (winSymbols, betAmount) => {
  let winAmount = 0;
  winSymbols.forEach((symbol) => {
    if (symbol in symbolValue) {
      winAmount += betAmount * symbolValue[symbol];
    }
  });

  return winAmount;
};

const symbolValue = {
  apple: 0.5,
  orange: 1,
  cherry: 1.5,
  grape: 2,
  heart: 3,
  diamond: 5,
  seven: 10,
};