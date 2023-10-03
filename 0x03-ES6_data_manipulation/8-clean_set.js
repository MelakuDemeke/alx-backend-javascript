const cleanSet = (set, startString) => [...set]
  .filter((item) => item !== undefined)
  .map((item) => (item.startsWith(startString) ? item.slice(startString.length) : ''))
  .join('-');

export default cleanSet;
