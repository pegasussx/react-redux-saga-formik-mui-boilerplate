import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
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
import { PUBLIC_ROUTES } from 'config/routes';
import { FONT_SIZES, FONT_WEIGHTS } from 'config/theme-fonts';

import { INVALID_MESSAGES } from 'constants/validation-messages';

const phoneRegExp = /([0-9]{3})-([0-9]{3})-([0-9]{4})/;

const validationSchema = yup.object({
  firstName: yup.string().required(INVALID_MESSAGES.FIRSTNAME_REQUIRED),
  lastName: yup.string().required(INVALID_MESSAGES.LASTNAME_REQUIRED),
  email: yup
    .string()
    .email(INVALID_MESSAGES.INVALID_EMAIL)
    .required(INVALID_MESSAGES.EMAIL_REQUIRED),
  address: yup.string().required(INVALID_MESSAGES.ADDRESS_REQUIRED),
  address2: yup.string(),
  city: yup.string().required(INVALID_MESSAGES.CITY_REQUIRED),
  state: yup.string().required(INVALID_MESSAGES.STATE_REQUIRED),
  phone: yup
    .string()
    .required(INVALID_MESSAGES.PHONE_REQUIRED)
    .matches(phoneRegExp, INVALID_MESSAGES.INVALID_PHONE_NUMBER),
  password: yup
    .string()
    .min(6, INVALID_MESSAGES.PASSWORD_LENGTH)
    .required(INVALID_MESSAGES.PASSWORD_REQUIRED),
  confirm: yup
    .string()
    .min(6, INVALID_MESSAGES.CONFIRMATION_LENGTH)
    .oneOf([yup.ref('password'), null], INVALID_MESSAGES.CONFIRMATION_INVALID)
    .required(INVALID_MESSAGES.CONFIRMATION_REQUIRED),
});

const SignUp = () => {
  const navigate = useNavigate();

  const [sent, setSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      phone: '',
      password: '',
      confirm: '',
    },
    validationSchema,
    onSubmit: (values: {
      firstName: string;
      lastName: string;
      email: string;
      address: string;
      address2: string;
      city: string;
      state: string;
      phone: string;
      password: string;
      confirm: string;
    }) => {
      setSent(true);
      //   void signUpAction(values.firstName, values.email, values.password).then((_response: any) => {
      //     setSent(false);
      //     if (_response.ok) {
      //       toast.success('Created Account Successfully');
      //     } else {
      //       toast.warn(_response.error);
      //     }
      //   });
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
              navigate(PUBLIC_ROUTES.login);
            }}
          >
            Login
          </ToogleButton>
        </TopBar>
        <Description>
          <PText size={FONT_SIZES.lg} weight={FONT_WEIGHTS.bold}>
            Create an account
          </PText>
        </Description>
        <Grid container spacing={1} direction='row' alignItems='center'>
          <Grid item xs={4}>
            <PText>First Name (*)</PText>
          </Grid>
          <Grid item xs={8}>
            <PTextField
              id='firstName'
              name='firstName'
              label='Enter your first name'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              variant='standard'
            />
          </Grid>
          <Grid item xs={4}>
            <PText>Last Name (*)</PText>
          </Grid>
          <Grid item xs={8}>
            <PTextField
              id='lastName'
              name='lastName'
              label='Enter your last name'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              variant='standard'
            />
          </Grid>
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
            <PText>Address Line1 (*)</PText>
          </Grid>
          <Grid item xs={8}>
            <PTextField
              id='address'
              name='address'
              label='Enter your address'
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              variant='standard'
            />
          </Grid>
          <Grid item xs={4}>
            <PText>Address Line2</PText>
          </Grid>
          <Grid item xs={8}>
            <PTextField
              id='address2'
              name='address2'
              label='Enter your address line2'
              value={formik.values.address2}
              onChange={formik.handleChange}
              error={formik.touched.address2 && Boolean(formik.errors.address2)}
              helperText={formik.touched.address2 && formik.errors.address2}
              variant='standard'
            />
          </Grid>
          <Grid item xs={4}>
            <PText>City</PText>
          </Grid>
          <Grid item xs={8}>
            <PTextField
              id='city'
              name='city'
              label='Enter your city'
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              variant='standard'
            />
          </Grid>
          <Grid item xs={4}>
            <PText>State</PText>
          </Grid>
          <Grid item xs={8}>
            <PTextField
              id='state'
              name='state'
              label='Enter your state'
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
              variant='standard'
            />
          </Grid>
          <Grid item xs={4}>
            <PText>Phone Number</PText>
          </Grid>
          <Grid item xs={8}>
            <PTextField
              id='phone'
              name='phone'
              label='Enter your phone number'
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
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
          <Grid item xs={4}>
            <PText>Confirm Password</PText>
          </Grid>
          <Grid item xs={8}>
            <PasswordInput
              id='confirm'
              name='confirm'
              value={formik.values.confirm}
              placeholder='Confirm your password'
              error={formik.touched.confirm && Boolean(formik.errors.confirm)}
              helperText={formik.touched.confirm && formik.errors.confirm}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
        <PButton onClick={!sent ? formik.handleSubmit : undefined} primary>
          Continue
        </PButton>
      </Wrapper>
    </form>
  );
};

export default SignUp;

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',

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
