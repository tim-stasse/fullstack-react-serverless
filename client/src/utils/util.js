// @flow
export function branchFuncs<T, R1, R2>(
  test: (...args: Array<T>) => boolean,
  left: (...args: Array<T>) => R1,
  right: (...args: Array<T>) => R2
): (...args: Array<T>) => R1 | R2 {
  return (...args: Array<T>) =>
    test(...args) ? left(...args) : right(...args);
}
