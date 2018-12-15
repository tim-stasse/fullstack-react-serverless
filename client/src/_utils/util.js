export function branchFuncs(test, left, right) {
  return (...args) => (test(...args) ? left(...args) : right(...args));
}
