export default function appendToEachArrayValue(array, appendString) {
  const copyArray = [];
  for (const val of array) {
    copyArray.push(appendString + val);
  }

  return copyArray;
}
