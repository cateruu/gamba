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
  apple: 0.25,
  orange: 0.75,
  cherry: 1,
  grape: 1.5,
  strawberry: 2,
  watermelon: 2.5,
  heart: 3,
  diamond: 5,
  seven: 10,
};
