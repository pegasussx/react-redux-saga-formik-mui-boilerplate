import { TextField } from '@mui/material';
import { styled } from '@mui/system';

export const PTextField = styled(TextField)(() => ({
  outline: 'none',
  width: '100%',

  '.MuiFormLabel-root': {
    fontSize: '12px',
  },
}));
