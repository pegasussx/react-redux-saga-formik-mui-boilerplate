import { Button } from '@mui/material';
import { styled } from '@mui/system';

interface ToogleButtonProps {
  isActive?: boolean;
}

export const ToogleButton = styled(Button)<ToogleButtonProps>(({ theme, isActive = true }) => ({
  padding: '8px 12px',
  borderRadius: '20px',

  fontSize: '14px',

  color: isActive ? theme.palette.white : theme.palette.darkGreen,
  backgroundColor: isActive ? theme.palette.secondaryColor : theme.palette.subBg,

  '&:hover': {
    color: isActive ? theme.palette.white : theme.palette.darkGreen,
    backgroundColor: isActive ? theme.palette.secondaryColor : theme.palette.subBg,
  },
}));
