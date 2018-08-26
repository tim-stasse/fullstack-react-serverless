declare module "loadable-components" {
  declare export type ComponentTracker = {
    track: (
      component: React$ComponentType<*>,
      modules: any,
      index?: number
    ) => number,
    get: (id: number) => React$ComponentType<*>,
    getAll: () => { [key: number]: React$ComponentType<*> },
    reset: () => void
  };

  declare export var componentTracker: ComponentTracker;
  declare export var LOADABLE: string;

  declare export function loadComponents(): Promise<any>;

  declare export function getState(): {
    __LOADABLE_STATE__: { children: Array<{ id: number }> }
  };

  declare export type DefaultModuleImport<T> = {
    default: React$ComponentType<T>
  };

  declare export type ComponentModuleImport<T> =
    | React$ComponentType<T>
    | DefaultModuleImport<T>;

  declare type LoadableState<T> = {
    Component: ?React$ComponentType<T>,
    error: ?Error,
    loading: boolean
  };

  declare export type LoadableOptions<T> = {
    ErrorComponent?: React$ComponentType<{ error: Error, ownProps: T }>,
    LoadingComponent?: React$ComponentType<T>,
    render?: (options: LoadableState<T> & { ownProps: T }) => React$Node,
    modules?: Array<string>
  };

  declare export class Loadable<T> extends React$Component<
    T,
    LoadableState<T>
  > {
    static Component: React$ComponentType<T>;
    static loadingPromise: Promise<any>;
    static load(): Promise<any>;
  }

  declare export default function loadable<T>(
    loader: () => Promise<ComponentModuleImport<T>>,
    options?: LoadableOptions<T>
  ): Class<Loadable<T>>;
}
