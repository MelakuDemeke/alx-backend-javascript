const cleanSet = (set, startString) => {
  if (!startString || startString.length === 0) {
    return '';
  }

  return [...set]
    .filter((item) => item !== undefined)
    .map((item) => (item.startsWith(startString) ? item.slice(startString.length) : ''))
    .join('-');
};

export default cleanSet;
