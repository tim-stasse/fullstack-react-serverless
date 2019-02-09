import {
  Button,
  CardActions,
  CircularProgress,
  TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Login as AdminLogin, translate, userLogin } from 'react-admin';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { compose } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import { Link } from '_components';
import { forms, routes } from '_constants';

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

const login = (auth, dispatch, { redirectTo }) =>
  dispatch(userLogin(auth, redirectTo));

const FormComponent = ({ classes, isLoading, handleSubmit, translate }) => (
  <form onSubmit={handleSubmit(login)}>
    <div className={classes.form}>
      <div className={classes.input}>
        <Field
          autoFocus
          id="username"
          name="username"
          component={renderInput}
          label={translate('ra.auth.username')}
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
          translate('ra.auth.sign_in')
        )}
      </Button>
    </CardActions>
    <div className={classes.forgotPassword}>
      <Link component={RouterLink} to={routes.auth.forgotPassword}>
        {translate('auth.forgotPassword')}
      </Link>
    </div>
  </form>
);

const mapStateToProps = state => ({ isLoading: state.admin.loading > 0 });

const enhance = compose(
  withStyles(styles),
  translate,
  connect(mapStateToProps),
  reduxForm({
    form: forms.login,
    validate: (values, props) => {
      const errors = {};
      const { translate } = props;
      if (!values.username) {
        errors.username = translate('ra.validation.required');
      }
      if (!values.password) {
        errors.password = translate('ra.validation.required');
      }

      return errors;
    }
  })
);

export const LoginForm = enhance(FormComponent);
export const Login = () => <AdminLogin loginForm={<LoginForm />} />;
