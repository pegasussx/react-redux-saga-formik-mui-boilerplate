import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PButton } from 'components/inputs/button';
import { PText } from 'components/display/text';

import { IMAGES } from 'constants/images';
import { FONT_SIZES, FONT_WEIGHTS } from 'config/theme-fonts';
import { PUBLIC_ROUTES } from 'config/routes';

const Home = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Land>
        <LandingLogo>
          <img src={IMAGES.LOGO} alt='Logo Image' width={200} style={{ borderRadius: '50%' }} />
        </LandingLogo>
        <Box>
          <PText size={FONT_SIZES.xl} weight={FONT_WEIGHTS.extraBold}>
            {t('home.welcome')}
          </PText>
          <PText>{t('home.welcome-description')}</PText>
        </Box>
      </Land>
      <ButtonGroup>
        <PButton
          primary
          onClick={() => {
            navigate(PUBLIC_ROUTES.signup);
          }}
        >
          {t('home.create-account-button')}
        </PButton>
        <PButton
          onClick={() => {
            navigate(PUBLIC_ROUTES.login);
          }}
        >
          {t('home.login-account-button')}
        </PButton>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  gap: '12px',

  width: '100%',
  height: '100%',
}));

const Land = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  gap: '20px',

  height: '100%',

  padding: '4px',
}));

const LandingLogo = styled(Box)(() => ({
  height: '400px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ButtonGroup = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',

  width: '100%',
}));
