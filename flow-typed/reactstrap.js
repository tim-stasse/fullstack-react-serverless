declare module "reactstrap" {
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
    tag?: React$ElementType
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
    innerRef?: React$Ref<*>
  };

  declare export var Alert: React$StatelessFunctionalComponent<AlertProps>;

  declare type BadgeProps = {
    ...StandardProps,
    color?: string,
    pill?: boolean
  };

  declare export var Badge: React$StatelessFunctionalComponent<BadgeProps>;

  declare type BreadcrumbProps = {
    ...StandardProps,
    listTag?: React$ElementType,
    listClassName?: string,
    "aria-label"?: string
  };

  declare export var Breadcrumb: React$StatelessFunctionalComponent<
    BreadcrumbProps
  >;

  declare type BreadcrumbItemProps = {
    ...StandardProps,
    active?: boolean
  };

  declare export var BreadcrumbItem: React$StatelessFunctionalComponent<
    BreadcrumbItemProps
  >;

  declare type ButtonProps = {
    ...StandardProps,
    active?: boolean,
    block?: boolean,
    color?: string,
    disabled?: boolean,
    outline?: boolean,
    innerRef?: React$Ref<*>,
    onClick?: Function,
    size?: string
  };

  declare class Button extends React$Component<ButtonProps> {}
  declare export var Button: typeof Button;

  declare type ButtonDropdownProps = {
    ...$Diff<DropdownProps, { group: boolean }>
  };

  declare export var ButtonDropdown: React$StatelessFunctionalComponent<
    ButtonDropdownProps
  >;

  declare type ButtonGroupProps = {
    ...StandardProps,
    "aria-label"?: string,
    role?: string,
    size?: string,
    vertical?: boolean
  };

  declare export var ButtonGroup: React$StatelessFunctionalComponent<
    ButtonGroupProps
  >;

  declare type ButtonToolbarProps = {
    ...StandardProps,
    "aria-label"?: string,
    role?: string
  };

  declare export var ButtonToolbar: React$StatelessFunctionalComponent<
    ButtonToolbarProps
  >;

  declare type CardProps = {
    ...StandardProps,
    inverse?: boolean,
    color?: string,
    body?: boolean,
    outline?: boolean,
    innerRef?: React$Ref<*>
  };

  declare export var Card: React$StatelessFunctionalComponent<CardProps>;

  declare type CardBodyProps = {
    ...StandardProps
  };

  declare export var CardBody: React$StatelessFunctionalComponent<
    CardBodyProps
  >;

  declare type CardColumnsProps = {
    ...StandardProps
  };

  declare export var CardColumns: React$StatelessFunctionalComponent<
    CardColumnsProps
  >;

  declare type CardDeckProps = {
    ...StandardProps
  };

  declare export var CardDeck: React$StatelessFunctionalComponent<
    CardDeckProps
  >;

  declare type CardFooterProps = {
    ...StandardProps
  };

  declare export var CardFooter: React$StatelessFunctionalComponent<
    CardFooterProps
  >;

  declare type CardGroupProps = {
    ...StandardProps
  };

  declare export var CardGroup: React$StatelessFunctionalComponent<
    CardGroupProps
  >;

  declare type CardHeaderProps = {
    ...StandardProps
  };

  declare export var CardHeader: React$StatelessFunctionalComponent<
    CardHeaderProps
  >;

  declare type CardImgProps = {
    ...StandardProps,
    top?: boolean,
    bottom?: boolean
  };

  declare export var CardImg: React$StatelessFunctionalComponent<CardImgProps>;

  declare type CardImgOverlayProps = {
    ...StandardProps
  };

  declare export var CardImgOverlay: React$StatelessFunctionalComponent<
    CardImgOverlayProps
  >;

  declare type CardLinkProps = {
    ...StandardProps,
    innerRef?: React$Ref<*>
  };

  declare export var CardLink: React$StatelessFunctionalComponent<
    CardLinkProps
  >;

  declare type CardSubtitleProps = {
    ...StandardProps
  };

  declare export var CardSubtitle: React$StatelessFunctionalComponent<
    CardSubtitleProps
  >;

  declare type CardTextProps = {
    ...StandardProps
  };

  declare export var CardText: React$StatelessFunctionalComponent<
    CardTextProps
  >;

  declare type CardTitleProps = {
    ...StandardProps
  };

  declare export var CardTitle: React$StatelessFunctionalComponent<
    CardTitleProps
  >;

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

  declare class Carousel extends React$Component<DropdownProps> {}
  declare export var Carousel: typeof Carousel;

  declare type CarouselCaptionProps = {
    ...CssProps,
    captionHeader?: string,
    captionText: string
  };

  declare export var CarouselCaption: React$StatelessFunctionalComponent<
    CarouselCaptionProps
  >;

  declare type CarouselControlProps = {
    ...CssProps,
    direction: "prev" | "next",
    onClickHandler: Function,
    directionText?: string
  };

  declare export var CarouselControl: React$StatelessFunctionalComponent<
    CarouselControlProps
  >;

  declare type CarouselIndicatorsProps = {
    ...CssProps,
    items: Array<any>,
    activeIndex: number,
    onClickHandler: Function
  };

  declare export var CarouselIndicators: React$StatelessFunctionalComponent<
    CarouselIndicatorsProps
  >;

  declare type CarouselItemProps = {
    ...TransitionProps,
    ...StandardProps,
    in?: boolean,
    slide?: boolean
  };

  declare class CarouselItem extends React$Component<CarouselItemProps> {}
  declare export var CarouselItem: typeof CarouselItem;

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

  declare export var Col: React$StatelessFunctionalComponent<ColProps>;

  declare type CollapseProps = {
    ...TransitionProps,
    ...StandardProps,
    isOpen?: boolean,
    navbar?: boolean,
    innerRef?: React$Ref<*>
  };

  declare class Collapse extends React$Component<CollapseProps> {}
  declare export var Collapse: typeof Collapse;

  declare type ContainerProps = {
    ...StandardProps,
    fluid?: boolean
  };

  declare export var Container: React$StatelessFunctionalComponent<
    ContainerProps
  >;

  declare type CustomInputProps = {
    ...CssProps,
    id: string | number,
    type: string,
    label?: React$Node,
    inline?: boolean,
    valid?: boolean,
    invalid?: boolean,
    bsSize?: string,
    innerRef?: React$Ref<*>
  };

  declare export var CustomInput: React$StatelessFunctionalComponent<
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

  declare class Dropdown extends React$Component<DropdownProps> {}
  declare export var Dropdown: typeof Dropdown;

  declare type DropdownItemProps = {
    ...StandardProps,
    active?: boolean,
    disabled?: boolean,
    divider?: boolean,
    header?: boolean,
    onClick?: Function,
    toggle?: boolean
  };

  declare class DropdownItem extends React$Component<DropdownItemProps> {}
  declare export var DropdownItem: typeof DropdownItem;

  declare type DropdownMenuProps = {
    ...StandardProps,
    right?: boolean,
    flip?: boolean,
    modifiers?: Object,
    persist?: boolean
  };

  declare export var DropdownMenu: React$StatelessFunctionalComponent<
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

  declare class DropdownToggle extends React$Component<DropdownToggleProps> {}
  declare export var DropdownToggle: typeof DropdownToggle;

  declare type FadeProps = {
    ...TransitionProps,
    ...StandardProps,
    baseClass?: string,
    baseClassActive?: string,
    innerRef?: React$Ref<*>
  };

  declare export var Fade: React$StatelessFunctionalComponent<FadeProps>;

  declare type FormProps = {
    ...StandardProps,
    inline?: boolean,
    innerRef?: React$Ref<*>
  };

  declare class Form extends React$Component<FormProps> {}
  declare export var Form: typeof Form;

  declare type FormFeedbackProps = {
    ...StandardProps,
    valid?: boolean,
    tooltip?: boolean
  };

  declare export var FormFeedback: React$StatelessFunctionalComponent<
    FormFeedbackProps
  >;

  declare type FormGroupProps = {
    ...StandardProps,
    row?: boolean,
    check?: boolean,
    inline?: boolean,
    disabled?: boolean
  };

  declare export var FormGroup: React$StatelessFunctionalComponent<
    FormGroupProps
  >;

  declare type FormTextProps = {
    ...StandardProps,
    inline?: boolean,
    color?: string
  };

  declare export var FormText: React$StatelessFunctionalComponent<
    FormTextProps
  >;

  declare type InputProps = {
    ...StandardProps,
    type?: string,
    size?: string,
    bsSize?: string,
    valid?: boolean,
    invalid?: boolean,
    innerRef?: React$Ref<*>,
    plaintext?: boolean,
    addon?: boolean
  };

  declare class Input extends React$Component<InputProps> {}
  declare export var Input: typeof Input;

  declare type InputGroupProps = {
    ...StandardProps,
    size?: string
  };

  declare export var InputGroup: React$StatelessFunctionalComponent<
    InputGroupProps
  >;

  declare type InputGroupAddonProps = {
    ...StandardProps,
    addonType: "prepend" | "append"
  };

  declare export var InputGroupAddon: React$StatelessFunctionalComponent<
    InputGroupAddonProps
  >;

  declare type InputGroupButtonProps = {
    ...StandardProps,
    addonType: "prepend" | "append",
    groupClassName?: string,
    groupAttributes?: Object
  };

  declare export var InputGroupButton: React$StatelessFunctionalComponent<
    InputGroupButtonProps
  >;

  declare type InputGroupButtonDropdownProps = {
    ...$Exact<DropdownProps>,
    addonType: "prepend" | "append"
  };

  declare export var InputGroupButtonDropdown: React$StatelessFunctionalComponent<
    InputGroupButtonDropdownProps
  >;

  declare type InputGroupTextProps = {
    ...StandardProps
  };

  declare export var InputGroupText: React$StatelessFunctionalComponent<
    InputGroupTextProps
  >;

  declare type JumbotronProps = {
    ...StandardProps,
    fluid?: boolean
  };

  declare export var Jumbotron: React$StatelessFunctionalComponent<
    JumbotronProps
  >;

  declare type LabelProps = {
    ...$Exact<ColProps>,
    hidden?: boolean,
    check?: boolean,
    size?: string,
    for?: string
  };

  declare export var Label: React$StatelessFunctionalComponent<LabelProps>;

  declare type ListGroupProps = {
    ...StandardProps,
    flush?: boolean
  };

  declare export var ListGroup: React$StatelessFunctionalComponent<
    ListGroupProps
  >;

  declare type ListGroupItemProps = {
    ...StandardProps,
    active?: boolean,
    disabled?: boolean,
    color?: string,
    action?: boolean
  };

  declare export var ListGroupItem: React$StatelessFunctionalComponent<
    ListGroupItemProps
  >;

  declare type ListGroupItemHeadingProps = {
    ...StandardProps
  };

  declare export var ListGroupItemHeading: React$StatelessFunctionalComponent<
    ListGroupItemHeadingProps
  >;

  declare type ListGroupItemTextProps = {
    ...StandardProps
  };

  declare export var ListGroupItemText: React$StatelessFunctionalComponent<
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

  declare export var Media: React$StatelessFunctionalComponent<MediaProps>;

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
    external?: React$Node,
    fade?: boolean,
    zIndex?: number | string,
    backdropTransition?: $Shape<FadeProps>,
    modalTransition?: $Shape<FadeProps>,
    innerRef?: React$Ref<*>
  };

  declare class Modal extends React$Component<ModalProps> {}
  declare export var Modal: typeof Modal;

  declare type ModalBodyProps = {
    ...StandardProps
  };

  declare export var ModalBody: React$StatelessFunctionalComponent<
    ModalBodyProps
  >;

  declare type ModalFooterProps = {
    ...StandardProps
  };

  declare export var ModalFooter: React$StatelessFunctionalComponent<
    ModalFooterProps
  >;

  declare type ModalHeaderProps = {
    ...StandardProps,
    wrapTag?: Function | string,
    toggle?: Function,
    closeAriaLabel?: string
  };

  declare export var ModalHeader: React$StatelessFunctionalComponent<
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

  declare export var Nav: React$StatelessFunctionalComponent<NavProps>;

  declare type NavItemProps = {
    ...StandardProps,
    active?: boolean
  };

  declare export var NavItem: React$StatelessFunctionalComponent<NavItemProps>;

  declare type NavLinkProps = {
    ...StandardProps,
    innerRef?: React$Ref<*>,
    disabled?: boolean,
    active?: boolean,
    onClick?: Function,
    href?: any
  };

  declare class NavLink extends React$Component<NavLinkProps> {}
  declare export var NavLink: typeof NavLink;

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

  declare export var Navbar: React$StatelessFunctionalComponent<NavbarProps>;

  declare type NavbarBrandProps = {
    ...StandardProps
  };

  declare export var NavbarBrand: React$StatelessFunctionalComponent<
    NavbarBrandProps
  >;

  declare type NavbarTogglerProps = {
    ...StandardProps,
    type?: string
  };

  declare export var NavbarToggler: React$StatelessFunctionalComponent<
    NavbarTogglerProps
  >;

  declare type PaginationProps = {
    ...StandardProps,
    listClassName?: string,
    size?: string,
    listTag?: Function | string,
    "aria-label"?: string
  };

  declare export var Pagination: React$StatelessFunctionalComponent<
    PaginationProps
  >;

  declare type PaginationItemProps = {
    ...StandardProps,
    active?: boolean,
    disabled?: boolean
  };

  declare export var PaginationItem: React$StatelessFunctionalComponent<
    PaginationItemProps
  >;

  declare type PaginationLinkProps = {
    ...StandardProps,
    "aria-label"?: string,
    next?: boolean,
    previous?: boolean
  };

  declare export var PaginationLink: React$StatelessFunctionalComponent<
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

  declare class Popover extends React$Component<PopoverProps> {}
  declare export var Popover: typeof Popover;

  declare type PopoverBodyProps = {
    ...StandardProps
  };

  declare export var PopoverBody: React$StatelessFunctionalComponent<
    PopoverBodyProps
  >;

  declare type PopoverHeaderProps = {
    ...StandardProps
  };

  declare export var PopoverHeader: React$StatelessFunctionalComponent<
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

  declare class PopperContent extends React$Component<PopperContentProps> {}
  declare export var PopperContent: typeof PopperContent;

  declare type PopperTargetHelperProps = {
    target: string | Function | Element
  };

  declare export var PopperTargetHelper: React$StatelessFunctionalComponent<
    PopperTargetHelperProps
  >;

  declare type PortalProps = {
    node?: any
  };

  declare class Portal extends React$Component<PortalProps> {}
  declare export var Portal: typeof Portal;

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

  declare export var Progress: React$StatelessFunctionalComponent<
    ProgressProps
  >;

  declare type RowProps = {
    ...StandardProps,
    noGutters?: boolean
  };

  declare export var Row: React$StatelessFunctionalComponent<RowProps>;

  declare type TabContentProps = {
    ...StandardProps,
    activeTab?: any
  };

  declare type TabContentContext = {
    activeTabId?: any
  };

  declare class TabContent extends React$Component<TabContentProps> {}
  declare export var TabContent: typeof TabContent;

  declare type TabPaneProps = {
    ...StandardProps,
    tabId?: any
  };

  declare export var TabPane: React$StatelessFunctionalComponent<TabPaneProps>;

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

  declare export var Table: React$StatelessFunctionalComponent<TableProps>;

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
    innerRef?: React$Ref<*>,
    trigger?: string
  };

  declare class Tooltip extends React$Component<TooltipProps> {}
  declare export var Tooltip: typeof Tooltip;

  declare type UncontrolledAlertProps = {
    ...$Diff<AlertProps, { isOpen: boolean, toggle: Function }>
  };

  declare class UncontrolledAlert extends React$Component<
    UncontrolledAlertProps,
    { isOpen: boolean }
  > {}
  declare export var UncontrolledAlert: typeof UncontrolledAlert;

  declare type UncontrolledButtonDropdownProps = {
    ...$Diff<ButtonDropdownProps, { isOpen: boolean, toggle: Function }>
  };

  declare class UncontrolledButtonDropdown extends React$Component<
    UncontrolledButtonDropdownProps,
    { isOpen: boolean }
  > {}
  declare export var UncontrolledButtonDropdown: typeof UncontrolledButtonDropdown;

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

  declare class UncontrolledCarousel extends React$Component<
    UncontrolledCarouselProps,
    { activeIndex: number }
  > {}
  declare export var UncontrolledCarousel: typeof UncontrolledCarousel;

  declare type UncontrolledCollapseProps = {
    ...$Diff<CollapseProps, { isOpen: boolean }>,
    toggler: string,
    toggleEvents?: Array<string>
  };

  declare class UncontrolledCollapse extends React$Component<
    UncontrolledCollapseProps,
    { isOpen: boolean }
  > {}
  declare export var UncontrolledCollapse: typeof UncontrolledCollapse;

  declare type UncontrolledDropdownProps = {
    ...$Diff<DropdownProps, { isOpen: boolean, toggle: Function }>
  };

  declare class UncontrolledDropdown extends React$Component<
    UncontrolledDropdownProps,
    { isOpen: boolean }
  > {}
  declare export var UncontrolledDropdown: typeof UncontrolledDropdown;

  declare type UncontrolledTooltipProps = {
    ...$Diff<TooltipProps, { isOpen: boolean, toggle: Function }>
  };

  declare class UncontrolledTooltip extends React$Component<
    UncontrolledTooltipProps,
    { isOpen: boolean }
  > {}
  declare export var UncontrolledTooltip: typeof UncontrolledTooltip;
}
