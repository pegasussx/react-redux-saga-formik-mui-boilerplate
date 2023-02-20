import { Button } from '@mui/material';
import { styled } from '@mui/system';

interface RoundButtonProps {
  buttonSize: string;
  backgroundColor: string;
}

export const RoundButton = styled(Button)<RoundButtonProps>(({ buttonSize, backgroundColor }) => ({
  minWidth: buttonSize,
  maxWidth: buttonSize,
  minHeight: buttonSize,
  maxHeight: buttonSize,

  borderRadius: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor,

  '&:hover': {
    backgroundColor,
  },
}));
