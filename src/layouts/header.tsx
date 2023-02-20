import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { SignalCellularAlt, Wifi, Battery90 } from '@mui/icons-material';

export const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <Notch>
        {time.getHours()}
        {time.getSeconds() % 2 ? ' ' : ':'}
        {time.getMinutes()}
      </Notch>
      <Notch>
        <SignalCellularAlt />
        <Wifi />
        <Battery90 />
      </Notch>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',

  position: 'absolute',
  top: 0,
  left: 0,

  borderRadius: '20px 20px 0 0',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  zIndex: 999,

  backgroundColor: theme.palette.white,
}));

const Notch = styled(Box)(({ theme }) => ({
  color: theme.palette.black,

  padding: '10px',

  display: 'flex',
  alignItems: 'center',

  '> *': {
    fontSize: '12px',
    padding: '0 4px',
  },
}));
