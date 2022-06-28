export const getSymbolsCount = (arr) => {
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

  return symbols;
};
