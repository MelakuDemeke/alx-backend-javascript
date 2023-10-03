const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position > length - 1) {
    throw new Error('Position outside range');
  }

}

export default createInt8TypedArray;
