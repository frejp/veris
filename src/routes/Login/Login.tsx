import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

import { AppDispatch } from '../../App.router';
import { useTypedSelector, login } from '../../ducks';
import { designTokens } from '../../designTokens';
import { FormikInput, BaseLayout, PrimaryButton, FormErrorMessage, SmallHeading } from '../../components';
import { BoxWrapper, SpacingY, EmptySocialButtons, ForgotPassword } from './styled';

interface FormData {
  email: string,
  password: string
}

const formInitialValues: FormData= {
  email: '',
  password: '',
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('please provide an email address'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
});

export const Login: React.FC= () => {
  const loginFailedMessage = useTypedSelector((state) => state.system.loginFailedMessage);
  const isLoggedIn = useTypedSelector((state) => state.system.isLoggedIn);
  const history = useHistory();

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (values: FormData) => {
    dispatch(login(values.email, values.password));
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.push(`/works/${'f7dc6685-d4a0-403d-ab1c-46b9c8ffb4b3'}/`);
    }
  }, [isLoggedIn, history]);

  return (
    <BaseLayout>
      <SpacingY />
      <SmallHeading>LOGIN</SmallHeading>
      <Formik initialValues={formInitialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form>
          <BoxWrapper>
            <FormikInput name="email" placeholder="EMAIL" type="text" />
            <FormikInput name="password" placeholder="ENTER PASSWORD" type="password" />
            {loginFailedMessage && (
              <FormErrorMessage color={designTokens.red} textAlign="center">
                Invalid email or password
              </FormErrorMessage>
            )}
            <PrimaryButton type="submit">LOGIN</PrimaryButton>
            <ForgotPassword color="#dddddd">Forgot Password</ForgotPassword>
            <EmptySocialButtons />
          </BoxWrapper>
        </Form>
      </Formik>
    </BaseLayout>
  );
};
