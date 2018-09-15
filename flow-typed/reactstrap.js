declare module "reactstrap" {
  import type {
    Component,
    ElementType,
    Node,
    Ref,
    StatelessFunctionalComponent
  } from "react";

  declare type EndHandler = (node: HTMLElement, done: () => void) => void;
  declare type EnterHandler = (node: HTMLElement, isAppearing: boolean) => void;
  declare type ExitHandler = (node: HTMLElement) => void;

  declare type TransitionProps = {
    appear?: boolean,
    enter?: boolean,
    exit?: boolean,
    mountOnEnter?: boolean,
    unmountOnExit?: boolean,
    onEnter?: EnterHandler,
    onEntering?: EnterHandler,
    onEntered?: EnterHandler,
    onExit?: ExitHandler,
    onExiting?: ExitHandler,
    onExited?: ExitHandler,
    timeout?: number | { enter?: number, exit?: number },
    addEndListener?: null
  };

  declare type CssProps = {
    className?: string,
    cssModule?: Object
  };

  declare type StandardProps = {
    ...CssProps,
    tag?: ElementType
  };

  declare type AlertProps = {
    ...StandardProps,
    closeClassName?: string,
    closeAriaLabel?: string,
    color?: string,
    fade?: boolean,
    isOpen?: boolean,
    toggle?: Function,
    transition?: $Shape<FadeProps>,
    innerRef?: Ref<*>
  };

  declare export var Alert: StatelessFunctionalComponent<AlertProps>;

  declare type BadgeProps = {
    ...StandardProps,
    color?: string,
    pill?: boolean
  };

  declare export var Badge: StatelessFunctionalComponent<BadgeProps>;

  declare type BreadcrumbProps = {
    ...StandardProps,
    listTag?: ElementType,
    listClassName?: string,
    "aria-label"?: string
  };

  declare export var Breadcrumb: StatelessFunctionalComponent<BreadcrumbProps>;

  declare type BreadcrumbItemProps = {
    ...StandardProps,
    active?: boolean
  };

  declare export var BreadcrumbItem: StatelessFunctionalComponent<
    BreadcrumbItemProps
  >;

  declare type ButtonProps = {
    ...StandardProps,
    active?: boolean,
    block?: boolean,
    color?: string,
    disabled?: boolean,
    outline?: boolean,
    innerRef?: Ref<*>,
    onClick?: Function,
    size?: string
  };

  declare export var Button: Class<Component<ButtonProps>>;

  declare type ButtonDropdownProps = {
    ...$Diff<DropdownProps, { group: boolean }>
  };

  declare export var ButtonDropdown: StatelessFunctionalComponent<
    ButtonDropdownProps
  >;

  declare type ButtonGroupProps = {
    ...StandardProps,
    "aria-label"?: string,
    role?: string,
    size?: string,
    vertical?: boolean
  };

  declare export var ButtonGroup: StatelessFunctionalComponent<
    ButtonGroupProps
  >;

  declare type ButtonToolbarProps = {
    ...StandardProps,
    "aria-label"?: string,
    role?: string
  };

  declare export var ButtonToolbar: StatelessFunctionalComponent<
    ButtonToolbarProps
  >;

  declare type CardProps = {
    ...StandardProps,
    inverse?: boolean,
    color?: string,
    body?: boolean,
    outline?: boolean,
    innerRef?: Ref<*>
  };

  declare export var Card: StatelessFunctionalComponent<CardProps>;

  declare type CardBodyProps = {
    ...StandardProps
  };

  declare export var CardBody: StatelessFunctionalComponent<CardBodyProps>;

  declare type CardColumnsProps = {
    ...StandardProps
  };

  declare export var CardColumns: StatelessFunctionalComponent<
    CardColumnsProps
  >;

  declare type CardDeckProps = {
    ...StandardProps
  };

  declare export var CardDeck: StatelessFunctionalComponent<CardDeckProps>;

  declare type CardFooterProps = {
    ...StandardProps
  };

  declare export var CardFooter: StatelessFunctionalComponent<CardFooterProps>;

  declare type CardGroupProps = {
    ...StandardProps
  };

  declare export var CardGroup: StatelessFunctionalComponent<CardGroupProps>;

  declare type CardHeaderProps = {
    ...StandardProps
  };

  declare export var CardHeader: StatelessFunctionalComponent<CardHeaderProps>;

  declare type CardImgProps = {
    ...StandardProps,
    top?: boolean,
    bottom?: boolean
  };

  declare export var CardImg: StatelessFunctionalComponent<CardImgProps>;

  declare type CardImgOverlayProps = {
    ...StandardProps
  };

  declare export var CardImgOverlay: StatelessFunctionalComponent<
    CardImgOverlayProps
  >;

  declare type CardLinkProps = {
    ...StandardProps,
    innerRef?: Ref<*>
  };

  declare export var CardLink: StatelessFunctionalComponent<CardLinkProps>;

  declare type CardSubtitleProps = {
    ...StandardProps
  };

  declare export var CardSubtitle: StatelessFunctionalComponent<
    CardSubtitleProps
  >;

  declare type CardTextProps = {
    ...StandardProps
  };

  declare export var CardText: StatelessFunctionalComponent<CardTextProps>;

  declare type CardTitleProps = {
    ...StandardProps
  };

  declare export var CardTitle: StatelessFunctionalComponent<CardTitleProps>;

  declare type CarouselProps = {
    ...CssProps,
    activeIndex?: number,
    next: Function,
    previous: Function,
    keyboard?: boolean,
    pause?: "hover" | false,
    ride?: "carousel",
    interval?: number | string | boolean,
    mouseEnter?: Function,
    mouseLeave?: Function,
    slide?: boolean
  };

  declare type CarouselContext = {
    direction: string
  };

  declare export var Carousel: Class<Component<CarouselProps>>;

  declare type CarouselCaptionProps = {
    ...CssProps,
    captionHeader?: string,
    captionText: string
  };

  declare export var CarouselCaption: StatelessFunctionalComponent<
    CarouselCaptionProps
  >;

  declare type CarouselControlProps = {
    ...CssProps,
    direction: "prev" | "next",
    onClickHandler: Function,
    directionText?: string
  };

  declare export var CarouselControl: StatelessFunctionalComponent<
    CarouselControlProps
  >;

  declare type CarouselIndicatorsProps = {
    ...CssProps,
    items: Array<any>,
    activeIndex: number,
    onClickHandler: Function
  };

  declare export var CarouselIndicators: StatelessFunctionalComponent<
    CarouselIndicatorsProps
  >;

  declare type CarouselItemProps = {
    ...TransitionProps,
    ...StandardProps,
    in?: boolean,
    slide?: boolean
  };

  declare export var CarouselItem: Class<Component<CarouselItemProps>>;

  declare type Column =
    | boolean
    | number
    | string
    | $Shape<{
        size?: boolean | number | string,
        order?: string | number,
        offset?: string | number
      }>;

  declare type ColProps = {
    ...StandardProps,
    xs?: Column,
    sm?: Column,
    md?: Column,
    lg?: Column,
    xl?: Column,
    widths?: Array<string>
  };

  declare export var Col: StatelessFunctionalComponent<ColProps>;

  declare type CollapseProps = {
    ...TransitionProps,
    ...StandardProps,
    isOpen?: boolean,
    navbar?: boolean,
    innerRef?: Ref<*>
  };

  declare export var Collapse: Class<Component<CollapseProps>>;

  declare type ContainerProps = {
    ...StandardProps,
    fluid?: boolean
  };

  declare export var Container: StatelessFunctionalComponent<ContainerProps>;

  declare type CustomInputProps = {
    ...CssProps,
    id: string | number,
    type: string,
    label?: Node,
    inline?: boolean,
    valid?: boolean,
    invalid?: boolean,
    bsSize?: string,
    innerRef?: Ref<*>
  };

  declare export var CustomInput: StatelessFunctionalComponent<
    CustomInputProps
  >;

  declare type DropdownProps = {
    ...StandardProps,
    disabled?: boolean,
    direction?: "up" | "down" | "left" | "right",
    group?: boolean,
    isOpen?: boolean,
    nav?: boolean,
    active?: boolean,
    addonType?: boolean | "prepend" | "append",
    size?: string,
    toggle?: Function,
    inNavbar?: boolean,
    setActiveFromChild?: boolean
  };

  declare type DropdownContext = {
    toggle: Function,
    isOpen: boolean,
    direction: "up" | "down" | "left" | "right",
    inNavbar: boolean
  };

  declare export var Dropdown: Class<Component<DropdownProps>>;

  declare type DropdownItemProps = {
    ...StandardProps,
    active?: boolean,
    disabled?: boolean,
    divider?: boolean,
    header?: boolean,
    onClick?: Function,
    toggle?: boolean
  };

  declare export var DropdownItem: Class<Component<DropdownItemProps>>;

  declare type DropdownMenuProps = {
    ...StandardProps,
    right?: boolean,
    flip?: boolean,
    modifiers?: Object,
    persist?: boolean
  };

  declare export var DropdownMenu: StatelessFunctionalComponent<
    DropdownMenuProps
  >;

  declare type DropdownToggleProps = {
    ...StandardProps,
    caret?: boolean,
    color?: string,
    disabled?: boolean,
    onClick?: Function,
    "aria-haspopup"?: boolean,
    split?: boolean,
    nav?: boolean
  };

  declare export var DropdownToggle: Class<Component<DropdownToggleProps>>;

  declare type FadeProps = {
    ...TransitionProps,
    ...StandardProps,
    baseClass?: string,
    baseClassActive?: string,
    innerRef?: Ref<*>
  };

  declare export var Fade: StatelessFunctionalComponent<FadeProps>;

  declare type FormProps = {
    ...StandardProps,
    inline?: boolean,
    innerRef?: Ref<*>
  };

  declare export var Form: Class<Component<FormProps>>;

  declare type FormFeedbackProps = {
    ...StandardProps,
    valid?: boolean,
    tooltip?: boolean
  };

  declare export var FormFeedback: StatelessFunctionalComponent<
    FormFeedbackProps
  >;

  declare type FormGroupProps = {
    ...StandardProps,
    row?: boolean,
    check?: boolean,
    inline?: boolean,
    disabled?: boolean
  };

  declare export var FormGroup: StatelessFunctionalComponent<FormGroupProps>;

  declare type FormTextProps = {
    ...StandardProps,
    inline?: boolean,
    color?: string
  };

  declare export var FormText: StatelessFunctionalComponent<FormTextProps>;

  declare type InputProps = {
    ...StandardProps,
    type?: string,
    size?: string,
    bsSize?: string,
    valid?: boolean,
    invalid?: boolean,
    innerRef?: Ref<*>,
    plaintext?: boolean,
    addon?: boolean
  };

  declare export var Input: Class<Component<InputProps>>;

  declare type InputGroupProps = {
    ...StandardProps,
    size?: string
  };

  declare export var InputGroup: StatelessFunctionalComponent<InputGroupProps>;

  declare type InputGroupAddonProps = {
    ...StandardProps,
    addonType: "prepend" | "append"
  };

  declare export var InputGroupAddon: StatelessFunctionalComponent<
    InputGroupAddonProps
  >;

  declare type InputGroupButtonProps = {
    ...StandardProps,
    addonType: "prepend" | "append",
    groupClassName?: string,
    groupAttributes?: Object
  };

  declare export var InputGroupButton: StatelessFunctionalComponent<
    InputGroupButtonProps
  >;

  declare type InputGroupButtonDropdownProps = {
    ...$Exact<DropdownProps>,
    addonType: "prepend" | "append"
  };

  declare export var InputGroupButtonDropdown: StatelessFunctionalComponent<
    InputGroupButtonDropdownProps
  >;

  declare type InputGroupTextProps = {
    ...StandardProps
  };

  declare export var InputGroupText: StatelessFunctionalComponent<
    InputGroupTextProps
  >;

  declare type JumbotronProps = {
    ...StandardProps,
    fluid?: boolean
  };

  declare export var Jumbotron: StatelessFunctionalComponent<JumbotronProps>;

  declare type LabelProps = {
    ...$Exact<ColProps>,
    hidden?: boolean,
    check?: boolean,
    size?: string,
    for?: string
  };

  declare export var Label: StatelessFunctionalComponent<LabelProps>;

  declare type ListGroupProps = {
    ...StandardProps,
    flush?: boolean
  };

  declare export var ListGroup: StatelessFunctionalComponent<ListGroupProps>;

  declare type ListGroupItemProps = {
    ...StandardProps,
    active?: boolean,
    disabled?: boolean,
    color?: string,
    action?: boolean
  };

  declare export var ListGroupItem: StatelessFunctionalComponent<
    ListGroupItemProps
  >;

  declare type ListGroupItemHeadingProps = {
    ...StandardProps
  };

  declare export var ListGroupItemHeading: StatelessFunctionalComponent<
    ListGroupItemHeadingProps
  >;

  declare type ListGroupItemTextProps = {
    ...StandardProps
  };

  declare export var ListGroupItemText: StatelessFunctionalComponent<
    ListGroupItemTextProps
  >;

  declare type MediaProps = {
    ...StandardProps,
    body?: boolean,
    bottom?: boolean,
    heading?: boolean,
    left?: boolean,
    list?: boolean,
    middle?: boolean,
    object?: boolean,
    right?: boolean,
    top?: boolean
  };

  declare export var Media: StatelessFunctionalComponent<MediaProps>;

  declare type ModalProps = {
    ...CssProps,
    isOpen?: boolean,
    autoFocus?: boolean,
    centered?: boolean,
    size?: string,
    toggle?: Function,
    keyboard?: boolean,
    role?: string,
    labelledBy?: string,
    backdrop?: boolean | "static",
    onEnter?: Function,
    onExit?: Function,
    onOpened?: Function,
    onClosed?: Function,
    wrapClassName?: string,
    modalClassName?: string,
    backdropClassName?: string,
    contentClassName?: string,
    external?: Node,
    fade?: boolean,
    zIndex?: number | string,
    backdropTransition?: $Shape<FadeProps>,
    modalTransition?: $Shape<FadeProps>,
    innerRef?: Ref<*>
  };

  declare export var Modal: Class<Component<ModalProps>>;

  declare type ModalBodyProps = {
    ...StandardProps
  };

  declare export var ModalBody: StatelessFunctionalComponent<ModalBodyProps>;

  declare type ModalFooterProps = {
    ...StandardProps
  };

  declare export var ModalFooter: StatelessFunctionalComponent<
    ModalFooterProps
  >;

  declare type ModalHeaderProps = {
    ...StandardProps,
    wrapTag?: Function | string,
    toggle?: Function,
    closeAriaLabel?: string
  };

  declare export var ModalHeader: StatelessFunctionalComponent<
    ModalHeaderProps
  >;

  declare type NavProps = {
    ...StandardProps,
    tabs?: boolean,
    pills?: boolean,
    vertical?: boolean | string,
    horizontal?: string,
    justified?: boolean,
    fill?: boolean,
    navbar?: boolean,
    card?: boolean
  };

  declare export var Nav: StatelessFunctionalComponent<NavProps>;

  declare type NavItemProps = {
    ...StandardProps,
    active?: boolean
  };

  declare export var NavItem: StatelessFunctionalComponent<NavItemProps>;

  declare type NavLinkProps = {
    ...StandardProps,
    innerRef?: Ref<*>,
    disabled?: boolean,
    active?: boolean,
    onClick?: Function,
    href?: any
  };

  declare export var NavLink: Class<Component<NavLinkProps>>;

  declare type NavbarProps = {
    ...StandardProps,
    light?: boolean,
    dark?: boolean,
    full?: boolean,
    fixed?: string,
    sticky?: string,
    color?: string,
    role?: string,
    expand?: boolean | string
  };

  declare export var Navbar: StatelessFunctionalComponent<NavbarProps>;

  declare type NavbarBrandProps = {
    ...StandardProps
  };

  declare export var NavbarBrand: StatelessFunctionalComponent<
    NavbarBrandProps
  >;

  declare type NavbarTogglerProps = {
    ...StandardProps,
    type?: string
  };

  declare export var NavbarToggler: StatelessFunctionalComponent<
    NavbarTogglerProps
  >;

  declare type PaginationProps = {
    ...StandardProps,
    listClassName?: string,
    size?: string,
    listTag?: Function | string,
    "aria-label"?: string
  };

  declare export var Pagination: StatelessFunctionalComponent<PaginationProps>;

  declare type PaginationItemProps = {
    ...StandardProps,
    active?: boolean,
    disabled?: boolean
  };

  declare export var PaginationItem: StatelessFunctionalComponent<
    PaginationItemProps
  >;

  declare type PaginationLinkProps = {
    ...StandardProps,
    "aria-label"?: string,
    next?: boolean,
    previous?: boolean
  };

  declare export var PaginationLink: StatelessFunctionalComponent<
    PaginationLinkProps
  >;

  declare type PopperPlacement =
    | "auto-start"
    | "auto"
    | "auto-end"
    | "top-start"
    | "top"
    | "top-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-end"
    | "bottom"
    | "bottom-start"
    | "left-end"
    | "left"
    | "left-start";

  declare type PopoverProps = {
    ...CssProps,
    placement?: PopperPlacement,
    target: string | Function | Element,
    container?: string | Function | Element,
    isOpen?: boolean,
    disabled?: boolean,
    hideArrow?: boolean,
    innerClassName?: string,
    placementPrefix?: string,
    toggle?: Function,
    delay?: $Shape<{ show: number, hide: number }> | number,
    modifiers?: Object,
    offset?: string | number
  };

  declare export var Popover: Class<Component<PopoverProps>>;

  declare type PopoverBodyProps = {
    ...StandardProps
  };

  declare export var PopoverBody: StatelessFunctionalComponent<
    PopoverBodyProps
  >;

  declare type PopoverHeaderProps = {
    ...StandardProps
  };

  declare export var PopoverHeader: StatelessFunctionalComponent<
    PopoverHeaderProps
  >;

  declare type PopperContentProps = {
    ...StandardProps,
    placement?: string,
    placementPrefix?: string,
    arrowClassName?: string,
    hideArrow?: boolean,
    isOpen: boolean,
    offset?: string | number,
    fallbackPlacement?:
      | "flip"
      | "clockwise"
      | "counterclockwise"
      | Array<"top" | "right" | "bottom" | "left">,
    flip?: boolean,
    container?: string | Function | Element,
    target: string | Function | Element,
    modifiers?: Object
  };

  declare type PopperContentContext = {
    popperManager: Object
  };

  declare export var PopperContent: Class<Component<PopperContentProps>>;

  declare type PopperTargetHelperProps = {
    target: string | Function | Element
  };

  declare export var PopperTargetHelper: StatelessFunctionalComponent<
    PopperTargetHelperProps
  >;

  declare type PortalProps = {
    node?: any
  };

  declare export var Portal: Class<Component<PortalProps>>;

  declare type ProgressProps = {
    ...StandardProps,
    bar?: boolean,
    multi?: boolean,
    value?: string | number,
    max?: string | number,
    animated?: boolean,
    striped?: boolean,
    color?: string,
    barClassName?: string
  };

  declare export var Progress: StatelessFunctionalComponent<ProgressProps>;

  declare type RowProps = {
    ...StandardProps,
    noGutters?: boolean
  };

  declare export var Row: StatelessFunctionalComponent<RowProps>;

  declare type TabContentProps = {
    ...StandardProps,
    activeTab?: any
  };

  declare type TabContentContext = {
    activeTabId?: any
  };

  declare export var TabContent: Class<Component<TabContentProps>>;

  declare type TabPaneProps = {
    ...StandardProps,
    tabId?: any
  };

  declare export var TabPane: StatelessFunctionalComponent<TabPaneProps>;

  declare type TableProps = {
    ...StandardProps,
    size?: string,
    bordered?: boolean,
    borderless?: boolean,
    striped?: boolean,
    dark?: boolean,
    hover?: boolean,
    responsive?: boolean | string,
    responsiveTag?: Function | string
  };

  declare export var Table: StatelessFunctionalComponent<TableProps>;

  declare type TooltipProps = {
    placement?: PopperPlacement,
    target: string | Function | Element,
    container?: string | Function | Element,
    isOpen?: boolean,
    disabled?: boolean,
    hideArrow?: boolean,
    innerClassName?: string,
    arrowClassName?: string,
    toggle?: Function,
    autohide?: boolean,
    placementPrefix?: string,
    delay?: $Shape<{ show: number, hide: number }> | number,
    modifiers?: Object,
    offset?: string | number,
    innerRef?: Ref<*>,
    trigger?: string
  };

  declare export var Tooltip: Class<Component<TooltipProps>>;

  declare type UncontrolledAlertProps = {
    ...$Diff<AlertProps, { isOpen: boolean, toggle: Function }>
  };

  declare export var UncontrolledAlert: Class<
    Component<UncontrolledAlert, { isOpen: boolean }>
  >;

  declare type UncontrolledButtonDropdownProps = {
    ...$Diff<ButtonDropdownProps, { isOpen: boolean, toggle: Function }>
  };

  declare export var UncontrolledButtonDropdown: Class<
    Component<UncontrolledButtonDropdown, { isOpen: boolean }>
  >;

  declare type UncontrolledCarouselProps = {
    ...$Diff<
      CarouselProps,
      {
        activeIndex: number,
        next: Function,
        previous: Function,
        ride: "carousel"
      }
    >,
    items: Array<any>,
    indicators?: boolean,
    controls?: boolean,
    autoPlay?: boolean,
    activeIndex?: number,
    next?: Function,
    previous?: Function,
    goToIndex?: Function
  };

  declare export var UncontrolledCarousel: Class<
    Component<UncontrolledCarousel, { activeIndex: number }>
  >;

  declare type UncontrolledCollapseProps = {
    ...$Diff<CollapseProps, { isOpen: boolean }>,
    toggler: string,
    toggleEvents?: Array<string>
  };

  declare export var UncontrolledCollapse: Class<
    Component<UncontrolledCollapse, { isOpen: boolean }>
  >;

  declare type UncontrolledDropdownProps = {
    ...$Diff<DropdownProps, { isOpen: boolean, toggle: Function }>
  };

  declare export var UncontrolledDropdown: Class<
    Component<UncontrolledDropdown, { isOpen: boolean }>
  >;

  declare type UncontrolledTooltipProps = {
    ...$Diff<TooltipProps, { isOpen: boolean, toggle: Function }>
  };

  declare export var UncontrolledTooltip: Class<
    Component<UncontrolledTooltip, { isOpen: boolean }>
  >;
}
