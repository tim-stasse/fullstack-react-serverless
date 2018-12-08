declare module "react-redux-toastr" {
  import type { Component, ElementType, ElementConfig, Node } from "react";
  import type { Action, ActionCreator, Reducer } from "redux";

  declare export type ToastrType =
    | "success"
    | "info"
    | "warning"
    | "light"
    | "error"
    | "confirm"
    | "message"
    | "remove"
    | "removeByType";

  declare export type ToastrPosition =
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";

  declare export type ToastrOptions = {
    timeOut?: number,
    icon?: ElementType,
    showCloseButton?: boolean,
    closeOnToastrClick?: boolean,
    onCloseButtonClick?: () => void,
    onToastrClick?: () => void,
    onShowComplete?: () => void,
    onHideComplete?: () => void,
    removeOnHover?: boolean,
    removeOnHoverTimeOut?: number,
    component?: ElementType
  };

  declare export type Toastr = {
    id?: string,
    type: ToastrType,
    title?: Node,
    position?: ToastrPosition,
    attention?: boolean,
    onAttentionClick?: (id: string) => void,
    message?: Node,
    options?: ToastrOptions
  };

  declare export type Transition = {
    in: "bounceIn" | "bounceInDown" | "fadeIn",
    out: "bounceOut" | "bounceOutUp" | "fadeOut"
  };

  declare export type ToastrConfirmOptions = {
    okText?: string,
    cancelText?: string,
    transitionIn?: $PropertyType<Transition, "in">,
    transitionOut?: $PropertyType<Transition, "out">,
    disableCancel?: boolean,
    onOk?: () => void,
    onCancel?: () => void,
    buttons?: Array<{
      text?: string,
      className?: string,
      handler?: () => void,
      ok?: boolean,
      cancel?: boolean
    }>
  };

  declare export type ToastrConfirm = {
    id: string,
    show: boolean,
    message: Node,
    options: ToastrConfirmOptions
  };

  declare export type ReduxToastrProps = {
    position?: string,
    newestOnTop?: boolean,
    timeOut?: number,
    confirmOptions?: ToastrConfirmOptions,
    progressBar?: boolean,
    transitionIn?: $PropertyType<Transition, "in">,
    transitionOut?: $PropertyType<Transition, "out">,
    preventDuplicates?: boolean,
    closeOnToastrClick?: boolean
  };

  declare var ReduxToastr: Class<Component<ReduxToastrProps>>;
  declare export default typeof ReduxToastr;

  declare export var reducer: Reducer<
    {
      toastrs: Array<Toastr>,
      confirm: ?ToastrConfirm
    },
    $Values<
      $ObjMap<
        typeof actions,
        <A>(actionCreator: ActionCreator<A, *, *, *, *, *, *>) => A
      >
    >
  >;

  declare export type EmitAddToastr = ((
    message: Node,
    options?: ToastrOptions
  ) => void) &
    ((title: Node, message: Node, options?: ToastrOptions) => void);

  declare export var toastr: {
    light: EmitAddToastr,
    message: EmitAddToastr,
    info: EmitAddToastr,
    success: EmitAddToastr,
    warning: EmitAddToastr,
    error: EmitAddToastr,
    clean: () => void,
    removeByType: (type: string) => void,
    remove: (id: string) => void,
    confirm: (message: ?Node, options?: ToastrConfirmOptions) => void
  };

  declare export var actions: {
    add: (
      toastr: Toastr
    ) => Action<
      "@ReduxToastr/toastr/ADD",
      | Toastr
      | {|
          ignoreToastr: true
        |}
    >,
    clean: () => Action<"@ReduxToastr/toastr/CLEAN">,
    remove: (id: string) => Action<"@ReduxToastr/toastr/REMOVE", string>,
    showConfirm: (
      toastrConfirm: $Rest<ToastrConfirm, {| show: boolean |}>
    ) => Action<"@ReduxToastr/confirm/SHOW", ToastrConfirm>,
    hideConfirm: () => Action<"@ReduxToastr/confirm/HIDE">,
    removeByType: (
      type: string
    ) => Action<"@ReduxToastr/toastr/REMOVE_BY_TYPE", string>
  };
}
