export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.reduce((result, item) => `${result} | ${item}`);
}
