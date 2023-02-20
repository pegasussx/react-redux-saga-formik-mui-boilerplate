import { useState } from 'react';
import { Input, InputAdornment, IconButton, InputLabel, FormControl } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

import { PText } from 'components/display/text';

import { COLORS_LIGHT_MODE } from 'config/theme-colors';
import { FONT_WEIGHTS } from 'config/theme-fonts';
interface PasswordInputProps {
  value: string;
  id: string;
  name: string;
  error: boolean | undefined;
  helperText: string | false | undefined;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput = ({
  value,
  id,
  name,
  error,
  helperText,
  placeholder = 'Password',
  onChange,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl variant='standard'>
      <InputLabel
        htmlFor={id}
        sx={helperText ? { fontSize: '12px', color: '#d32f2f' } : { fontSize: '12px' }}
      >
        {placeholder}
      </InputLabel>
      <Input
        id={id}
        name={name}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        error={error}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {helperText && (
        <PText
          variant='caption'
          size='0.75rem'
          weight={FONT_WEIGHTS.thin}
          color={COLORS_LIGHT_MODE.errorColor}
        >
          {helperText}
        </PText>
      )}
    </FormControl>
  );
};
