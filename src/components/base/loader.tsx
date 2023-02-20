import { Box } from '@mui/material';
import { styled } from '@mui/system';

import { IMAGES } from 'constants/images';

export const Loader = () => {
  return (
    <LoaderContainer>
      <img src={IMAGES.LOGO} alt='Logo Image' width={200} style={{ borderRadius: '50%' }} />
    </LoaderContainer>
  );
};

const LoaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '0',

  position: 'fixed',
  top: '0',
  left: '0',

  width: '100%',
  height: '100%',

  backgroundColor: theme.palette.darkGreen,
}));
