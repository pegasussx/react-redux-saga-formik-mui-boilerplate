import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Close } from '@mui/icons-material';

import { PButton } from 'components/inputs/button';
import { RoundButton } from 'components/inputs/round-button';
import { ToogleButton } from 'components/inputs/toogle-button';
import { PText } from 'components/display/text';
import { PTextField } from 'components/inputs/text-field';
import { PasswordInput } from 'components/inputs/password-input';

import { COLORS_LIGHT_MODE } from 'config/theme-colors';
import { AUTH_ROUTES, PUBLIC_ROUTES } from 'config/routes';
import { FONT_SIZES, FONT_WEIGHTS } from 'config/theme-fonts';

import { INVALID_MESSAGES } from 'constants/validation-messages';

import { loginAction } from 'redux/slices/auth.slice';

const validationSchema = yup.object({
  email: yup
    .string()
    .email(INVALID_MESSAGES.INVALID_EMAIL)
    .required(INVALID_MESSAGES.EMAIL_REQUIRED),
  password: yup
    .string()
    .min(6, INVALID_MESSAGES.PASSWORD_LENGTH)
    .required(INVALID_MESSAGES.PASSWORD_REQUIRED),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sent, setSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values: { email: string; password: string }) => {
      dispatch(
        loginAction({
          data: { email: values.email, password: values.password },
          success: () => {
            navigate(AUTH_ROUTES.main);
          },
        }),
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <TopBar>
          <RoundButton
            buttonSize='32px'
            backgroundColor={COLORS_LIGHT_MODE.lightYellow}
            onClick={() => {
              navigate(PUBLIC_ROUTES.home);
            }}
          >
            <Close color='warning' />
          </RoundButton>
          <ToogleButton
            onClick={() => {
              navigate(PUBLIC_ROUTES.signup);
            }}
          >
            Sign Up
          </ToogleButton>
        </TopBar>
        <Description>
          <PText size={FONT_SIZES.lg} weight={FONT_WEIGHTS.bold}>
            Welcome Back
          </PText>
          <PText weight={FONT_WEIGHTS.thin} color={COLORS_LIGHT_MODE.darkGrey}>
            Sign in securely to your account.
          </PText>
        </Description>
        <Grid container spacing={1} direction='row' alignItems='center'>
          <Grid item xs={4}>
            <PText>Email</PText>
          </Grid>
          <Grid item xs={8}>
            <PTextField
              id='email'
              name='email'
              label='Enter your email address'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant='standard'
            />
          </Grid>
          <Grid item xs={4}>
            <PText>Password</PText>
          </Grid>
          <Grid item xs={8}>
            <PasswordInput
              id='password'
              name='password'
              value={formik.values.password}
              placeholder='Enter your password'
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
        <PButton onClick={!sent ? formik.handleSubmit : undefined} primary>
          Login
        </PButton>
      </Wrapper>
    </form>
  );
};

export default Login;

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',

  padding: '10px 12px',

  width: '100%',

  gap: '30px',
}));

const TopBar = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginBottom: '12px',
}));

const Description = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}));
