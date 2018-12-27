export const then = (onFulfilled, onRejected) => promise =>
  promise.then(onFulfilled, onRejected);
