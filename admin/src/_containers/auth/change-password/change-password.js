import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { translate } from 'ra-core';
import React from 'react';
import { Title } from 'react-admin';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Field, reduxForm } from 'redux-form';
import { forms } from '_constants';
import { actions } from '_state';

const styles = () => ({
  form: {
    padding: '0 1em 1em 1em'
  },
  input: {
    marginTop: '1em'
  },
  button: {
    width: '100%'
  }
});

const renderInput = ({
  meta: { touched, error } = {},
  input: { ...inputProps },
  ...props
}) => (
  <TextField
    error={!!(touched && error)}
    helperText={touched && error}
    {...inputProps}
    {...props}
    fullWidth
  />
);

const changePassword = ({ oldPassword, newPassword }, dispatch) =>
  dispatch(actions.auth.changePassword(oldPassword, newPassword));

const Component = ({ classes, isLoading, handleSubmit, translate }) => (
  <Card>
    <Title title="Change Password" />
    <CardContent>
      <form onSubmit={handleSubmit(changePassword)}>
        <div className={classes.form}>
          <div className={classes.input}>
            <Field
              id="old-password"
              name="oldPassword"
              component={renderInput}
              label={translate('auth.oldPassword')}
              type="password"
              disabled={isLoading}
            />
          </div>
          <div className={classes.input}>
            <Field
              id="new-password"
              name="newPassword"
              component={renderInput}
              label={translate('auth.newPassword')}
              type="password"
              disabled={isLoading}
            />
          </div>
        </div>
        <CardActions>
          <Button
            variant="raised"
            type="submit"
            color="primary"
            disabled={isLoading}
            className={classes.button}>
            {isLoading ? (
              <CircularProgress size={25} thickness={2} />
            ) : (
              translate('auth.changePassword')
            )}
          </Button>
        </CardActions>
      </form>
    </CardContent>
  </Card>
);

const mapStateToProps = state => ({ isLoading: state.admin.loading > 0 });

const enhance = compose(
  withStyles(styles),
  translate,
  connect(mapStateToProps),
  reduxForm({
    form: forms.changePassword,
    validate: (values, props) => {
      const errors = {};
      const { translate } = props;
      if (!values.oldPassword) {
        errors.oldPassword = translate('ra.validation.required');
      }
      if (!values.newPassword) {
        errors.newPassword = translate('ra.validation.required');
      }

      return errors;
    }
  })
);

export const ChangePassword = enhance(Component);
