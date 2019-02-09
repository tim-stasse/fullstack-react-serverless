import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { isEmpty, negate } from 'lodash/fp';
import { translate } from 'ra-core';
import React from 'react';
import { Title } from 'react-admin';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { branch, compose, renderComponent } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import { forms, routes } from '_constants';
import { actions, selectors } from '_state';

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

const verifyEmailSubmit = ({ verificationCode }, dispatch) =>
  dispatch(actions.auth.verifyUserAttributeSubmit('email', verificationCode));

const Component = ({
  classes,
  isLoading,
  handleSubmit,
  translate,
  verifyEmail
}) => (
  <Card>
    <Title title="Verify Email" />
    <CardContent>
      <form onSubmit={handleSubmit(verifyEmailSubmit)}>
        <div className={classes.form}>
          <div className={classes.input}>
            <Field
              id="verification-code"
              name="verificationCode"
              component={renderInput}
              label={translate('auth.verificationCode')}
              type="text"
              disabled={isLoading}
            />
          </div>
        </div>
        <CardActions>
          <Button
            variant="raised"
            color="primary"
            disabled={isLoading}
            className={classes.button}
            onClick={verifyEmail}>
            {isLoading ? (
              <CircularProgress size={25} thickness={2} />
            ) : (
              translate('auth.resendCode')
            )}
          </Button>
          <Button
            variant="raised"
            type="submit"
            color="primary"
            disabled={isLoading}
            className={classes.button}>
            {isLoading ? (
              <CircularProgress size={25} thickness={2} />
            ) : (
              translate('auth.verifyEmail')
            )}
          </Button>
        </CardActions>
      </form>
    </CardContent>
  </Card>
);

const mapStateToProps = ({ admin, ...state }) => ({
  isLoading: admin.loading > 0,
  verifiedEmail: selectors.auth.verifiedEmail(state)
});

const mapDispatchToProps = dispatch => ({
  verifyEmail: () => dispatch(actions.auth.verifyUserAttribute('email'))
});

const enhance = compose(
  withStyles(styles),
  translate,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: forms.verifyEmail,
    validate: (values, props) => {
      const errors = {};
      const { translate } = props;
      if (!values.verificationCode) {
        errors.verificationCode = translate('ra.validation.required');
      }

      return errors;
    }
  }),
  branch(
    ({ verifiedEmail }) =>
      console.log(verifiedEmail) || negate(isEmpty)(verifiedEmail),
    renderComponent(
      () => console.log('redirect') || <Redirect to={routes.dashboard} />
    )
  )
);

export const VerifyEmail = enhance(Component);
