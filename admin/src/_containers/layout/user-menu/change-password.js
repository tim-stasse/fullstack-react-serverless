import { MenuItem } from '@material-ui/core';
import { LockOpen as Icon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { over } from 'lodash/fp';
import { translate } from 'ra-core';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'recompose';
import { routes } from '_constants';

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

const mapStateToProps = ({ theme }) => ({
  theme
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
  withStyles(styles)
);

export const ChangePassword = enhance(Component);
