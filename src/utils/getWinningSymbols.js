export const getWinningSymbols = (arr) => {
  let symbols = {};
  for (let cylinder of arr) {
    for (let symbol of cylinder) {
      if (symbol in symbols) {
        symbols[symbol] += 1;
      } else {
        symbols[symbol] = 1;
      }
    }
  }

  let winningSymbols = [];
  for (let [key, value] of Object.entries(symbols)) {
    if (value === 3) winningSymbols.push(key);
  }

  return winningSymbols;
};
