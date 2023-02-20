import { Box } from '@mui/material';
import { styled } from '@mui/system';

import { PText } from 'components/display/text';

import { IMAGES } from 'constants/images';
import { FONT_SIZES, FONT_WEIGHTS } from 'config/theme-fonts';
import { COLORS_LIGHT_MODE } from 'config/theme-colors';

const Error404 = () => {
  return (
    <Wrapper>
      <img src={IMAGES.LOGO} alt='Logo Image' width={200} style={{ borderRadius: '50%' }} />
      <PText size={FONT_SIZES.lg} weight={FONT_WEIGHTS.bold} color={COLORS_LIGHT_MODE.darkGreen}>
        Page Not Found
      </PText>
    </Wrapper>
  );
};

export default Error404;

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  gap: '20px',

  backgroundColor: theme.palette.white,
}));
