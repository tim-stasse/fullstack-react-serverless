import { MenuItem } from '@material-ui/core';
import { Email as Icon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { isEmpty, negate, over } from 'lodash/fp';
import React from 'react';
import { translate } from 'react-admin';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { branch, compose, renderNothing } from 'recompose';
import { routes } from '_constants';
import { selectors } from '_state';

const styles = theme => ({
  menuItem: {
    color: theme.palette.text.secondary
  },
  iconMenuPaddingStyle: {
    paddingRight: '1.2em'
  },
  iconPaddingStyle: {
    paddingRight: theme.spacing.unit
  }
});

const sanitizeRestProps = ({
  classes,
  className,
  translate,
  userLogout,
  locale,
  redirectTo,
  verifiedEmail,
  ...rest
}) => rest;

const Component = ({
  classes,
  className,
  onClick,
  translate,
  verifyEmail,
  ...rest
}) => (
  <MenuItem
    className={classnames('verifyEmail', classes.menuItem, className)}
    onClick={over([verifyEmail, onClick])}
    {...sanitizeRestProps(rest)}>
    <span className={classes.iconMenuPaddingStyle}>
      <Icon />
    </span>
    {translate('auth.verifyEmail')}
  </MenuItem>
);

const mapStateToProps = ({ theme, ...state }) => ({
  theme,
  verifiedEmail: selectors.auth.verifiedEmail(state)
});

const mapDispatchToProps = dispatch => ({
  verifyEmail: () => dispatch(push(routes.auth.verifyEmail))
});

const enhance = compose(
  translate,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles),
  branch(({ verifiedEmail }) => negate(isEmpty)(verifiedEmail), renderNothing)
);

export const VerifyEmail = enhance(Component);
