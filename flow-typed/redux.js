declare module "redux" {
  declare export type Action<T: $Subtype<string>, P = void, M = void> = {
    +type: T
  } & {
    +type: T,
    +payload: P
  } & {
    +type: T,
    +payload: P,
    +meta: M
  };

  declare export type Dispatch<A: Action<*, *>> = (action: A) => A;

  declare export type MiddlewareAPI<S, A, D: Dispatch<A>> = {
    dispatch: D,
    getState(): S
  };

  declare export type Store<S, A, D: Dispatch<A>> = {
    ...$Exact<MiddlewareAPI<S, A, D>>,
    subscribe(listener: () => void): () => void,
    replaceReducer(nextReducer: Reducer<S, A>): void
  };

  declare export type Reducer<S, A: Action<*, *>> = (
    state: $ReadOnly<S>,
    action: $ReadOnly<A>
  ) => S;

  declare export type Middleware<S, A, D: Dispatch<A>> = (
    api: MiddlewareAPI<S, A, D>
  ) => (next: D) => D;

  declare export type StoreCreator<S, A, D: Dispatch<A>> = (
    reducer: Reducer<S, A>,
    preloadedState: S,
    enhancer?: StoreEnhancer<S, A, D>
  ) => Store<S, A, D>;

  declare export type StoreEnhancer<S, A, D: Dispatch<A>> = (
    next: StoreCreator<S, A, D>
  ) => StoreCreator<S, A, D>;

  declare export function createStore<S, A, D: Dispatch<A>>(
    reducer: Reducer<S, A>,
    preloadedState?: S,
    enhancer?: StoreEnhancer<S, A, D>
  ): Store<S, A, D>;

  declare export function applyMiddleware<S, A, D: Dispatch<A>>(
    ...middlewares: Array<Middleware<S, A, D>>
  ): StoreEnhancer<S, A, D>;

  declare export type ActionCreator<T, A, B, C, D, E, F> = ((
    ...args: [A]
  ) => T) &
    ((...args: [A, B]) => T) &
    ((...args: [A, B, C]) => T) &
    ((...args: [A, B, C, D]) => T) &
    ((...args: [A, B, C, D, E]) => T) &
    ((...args: [A, B, C, D, E, F]) => T);

  declare export function bindActionCreators<
    A,
    K,
    C:
      | ActionCreator<A, *, *, *, *, *, *>
      | { [key: K]: ActionCreator<A, *, *, *, *, *, *> },
    D: Dispatch<A>
  >(
    actionCreator: C,
    dispatch: D
  ): C;

  declare export function combineReducers<O: {}>(
    reducers: O
  ): Reducer<
    $ObjMap<O, <S>(r: Reducer<S, *>) => S>,
    $Values<$ObjMap<O, <A>(r: Reducer<*, A>) => A>>
  >;

  declare export var compose: $Compose;
}
