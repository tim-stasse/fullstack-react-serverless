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

const completeNewPassword = ({ newPassword }, dispatch) =>
  dispatch(actions.auth.completeNewPassword(newPassword));

const FormComponent = ({ classes, isLoading, handleSubmit, translate }) => (
  <form onSubmit={handleSubmit(completeNewPassword)}>
    <div className={classes.form}>
      <div className={classes.input}>
        <Field
          id="password"
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
          translate('ra.auth.sign_in')
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
    form: forms.newPassword,
    validate: (values, props) => {
      const errors = {};
      const { translate } = props;
      if (!values.password) {
        errors.password = translate('ra.validation.required');
      }

      return errors;
    }
  })
);

export const NewPasswordForm = enhance(FormComponent);
export const NewPassword = () => <Login loginForm={<NewPasswordForm />} />;
