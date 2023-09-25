export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = idx;
    idx = appendString + value;
  }

  return array;
}
