export const catchError = onError => promise => promise.catch(onError);

export const then = (onFulfilled, onRejected) => promise =>
  promise.then(onFulfilled, onRejected);
