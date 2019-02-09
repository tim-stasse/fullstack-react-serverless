import {
  Button,
  CardActions,
  CircularProgress,
  TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { Login, translate } from 'react-admin';
import { connect } from 'react-redux';
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

const login = ({ username }, dispatch) =>
  dispatch(actions.auth.forgotPassword(username));

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
          translate('form.submit')
        )}
      </Button>
    </CardActions>
  </form>
);

const mapStateToProps = state => ({ isLoading: state.admin.loading > 0 });

const enhance = compose(
  withStyles(styles),
  translate,
  connect(mapStateToProps),
  reduxForm({
    form: forms.forgotPassword,
    validate: (values, props) => {
      const errors = {};
      const { translate } = props;
      if (!values.username) {
        errors.username = translate('ra.validation.required');
      }

      return errors;
    }
  })
);

export const ForgotPasswordForm = enhance(FormComponent);
export const ForgotPassword = () => (
  <Login loginForm={<ForgotPasswordForm />} />
);
