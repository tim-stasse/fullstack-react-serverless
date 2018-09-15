declare module "react-router-bootstrap" {
  import type { ElementConfig, Component } from "react";
  import typeof { NavLink } from "react-router-dom";

  declare type LinkContainerProps = {
    ...ElementConfig<NavLink>,
    onClick?: Function,
    replace?: boolean
  };

  declare export var LinkContainer: Class<Component<LinkContainerProps>>;
}
