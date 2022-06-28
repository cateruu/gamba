export const getSymbolsArr = (arr) => {
  return arr.map((cylinder) => {
    const cylindersArr = Array.from(cylinder.current.children);

    return cylindersArr.map((symbol) => symbol.alt);
  });
};
