import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';
import { capitalize } from '_utils/string';

export const styles = {
  root: {},
  underlineNone: {
    textDecoration: 'none'
  },
  underlineHover: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  underlineAlways: {
    textDecoration: 'underline'
  },
  button: {
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 'none',
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    '&::-moz-focus-inner': {
      borderStyle: 'none'
    }
  }
};

const Component = props => {
  const {
    children,
    classes,
    className,
    component,
    TypographyClasses,
    underline,
    variant,
    ...other
  } = props;

  return (
    <Typography
      className={classNames(
        classes.root,
        {
          [classes.button]: component === 'button'
        },
        classes[`underline${capitalize(underline)}`],
        className
      )}
      classes={TypographyClasses}
      component={component}
      {...other}>
      {children}
    </Typography>
  );
};

Component.defaultProps = {
  color: 'primary',
  component: 'a',
  underline: 'hover',
  variant: 'inherit'
};

export const Link = withStyles(styles, { name: 'MuiLink' })(Component);
