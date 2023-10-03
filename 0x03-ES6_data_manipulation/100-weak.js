export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let callCount = weakMap.get(endpoint) || 0;

  callCount += 1;

  weakMap.set(endpoint, callCount);

  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
