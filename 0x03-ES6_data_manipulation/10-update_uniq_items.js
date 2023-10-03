const updateUniqueItems = (map) => {
  if (map instanceof Map) {
    map.forEach((value, key, map) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
    return map;
  }
  throw new Error('Cannot process');
};

export default updateUniqueItems;
