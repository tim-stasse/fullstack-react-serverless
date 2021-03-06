import { MenuItem } from '@material-ui/core';
import { LockOpen as Icon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { isEmpty, over } from 'lodash/fp';
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
  changePassword,
  ...rest
}) => (
  <MenuItem
    className={classnames('changePassword', classes.menuItem, className)}
    onClick={over([changePassword, onClick])}
    {...sanitizeRestProps(rest)}>
    <span className={classes.iconMenuPaddingStyle}>
      <Icon />
    </span>
    {translate('auth.changePassword')}
  </MenuItem>
);

const mapStateToProps = ({ theme, ...state }) => ({
  theme,
  verifiedEmail: selectors.auth.verifiedEmail(state)
});

const mapDispatchToProps = dispatch => ({
  changePassword: () => dispatch(push(routes.auth.changePassword))
});

const enhance = compose(
  translate,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles),
  branch(({ verifiedEmail }) => isEmpty(verifiedEmail), renderNothing)
);

export const ChangePassword = enhance(Component);
