import { Typography } from '@mui/material';
import { styled } from '@mui/system';

import { COLORS_LIGHT_MODE } from 'config/theme-colors';

interface TextProps {
  size?: string;
  weight?: number;
  color?: string;
}

export const PText = styled(Typography)<TextProps>(
  ({ size = '14px', weight = 500, color = COLORS_LIGHT_MODE.darkGreen }) => ({
    fontSize: size,
    fontWeight: weight,
    color,
  }),
);
