import { Button } from '@mui/material';
import { styled } from '@mui/system';

import { FONT_SIZES, FONT_WEIGHTS } from 'config/theme-fonts';

interface Props {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

export const PButton = ({ children, primary = false, onClick }: Props) => {
  return (
    <CustomButton primary={primary} onClick={onClick}>
      {children}
    </CustomButton>
  );
};

interface CustomButtonProps {
  primary: boolean;
  width?: string;
}

const CustomButton = styled(Button)<CustomButtonProps>(({ theme, primary, width = '100%' }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  padding: '17.5px 0',

  width,
  borderRadius: '50px',

  fontSize: FONT_SIZES.default,
  fontWeight: FONT_WEIGHTS.bold,
  color: primary ? theme.palette.lightGrey : theme.palette.darkGreen,
  backgroundColor: primary ? theme.palette.darkGreen : theme.palette.lightGrey,

  '&:hover': {
    color: primary ? theme.palette.lightGrey : theme.palette.darkGreen,
    backgroundColor: primary ? theme.palette.darkGreen : theme.palette.lightGrey,
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
