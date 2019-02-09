import {
  Button,
  CardActions,
  CircularProgress,
  TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Login as AdminLogin, translate } from 'react-admin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
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
  },
  forgotPassword: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '1rem',
    paddingBottom: '1rem'
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

const resetPassword = (
  { verificationCode, password },
  dispatch,
  { location }
) => dispatch(actions.auth.resetPassword(verificationCode, password));

const FormComponent = ({ classes, isLoading, handleSubmit, translate }) => (
  <form onSubmit={handleSubmit(resetPassword)}>
    <div className={classes.form}>
      <div className={classes.input}>
        <Field
          autoFocus
          id="verification-code"
          name="verificationCode"
          component={renderInput}
          label={translate('auth.verificationCode')}
          disabled={isLoading}
        />
      </div>
      <div className={classes.input}>
        <Field
          id="password"
          name="password"
          component={renderInput}
          label={translate('ra.auth.password')}
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
          translate('auth.resetPassword')
        )}
      </Button>
    </CardActions>
  </form>
);

const mapStateToProps = state => ({ isLoading: state.admin.loading > 0 });

const enhance = compose(
  withRouter,
  withStyles(styles),
  translate,
  connect(mapStateToProps),
  reduxForm({
    form: forms.resetPassword,
    validate: (values, props) => {
      const errors = {};
      const { translate } = props;
      if (!values.code) {
        errors.code = translate('ra.validation.required');
      }
      if (!values.password) {
        errors.password = translate('ra.validation.required');
      }

      return errors;
    }
  })
);

export const ResetPasswordForm = enhance(FormComponent);
export const ResetPassword = () => (
  <AdminLogin loginForm={<ResetPasswordForm />} />
);
