import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { ToastContainer } from 'react-toastify';

import { Header } from './header';
import { LanguageSelector } from 'components/inputs/language-selector';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <LanguageSelector />
      <ContentWrapper>
        <MobileWrapper>
          <Photo />
          <Screen>
            <Header />
            <Content>{children}</Content>
          </Screen>
          {/* Notification */}
          <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            theme='light'
          />
        </MobileWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  minHeight: '100vh',
  padding: '70px 0px',

  backgroundColor: theme.palette.darkGreen,
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  width: '420px',

  borderRadius: '25px',
  boxShadow: '0 0 30px rgba(0,0,0, 0.5)',

  backgroundColor: theme.palette.black,

  zIndex: 2,

  [theme.breakpoints.down('sm')]: {
    width: '300px',
  },
}));

const MobileWrapper = styled(Box)(({ theme }) => ({
  width: '100%',

  paddingBottom: '216%',

  position: 'relative',

  borderRadius: '25px',
  boxShadow: '0 0 30px rgba(0,0,0, 0.5)',

  backgroundColor: theme.palette.black,

  zIndex: 2,
}));

const Photo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  top: '0%',
  left: '50%',
  transform: 'translateX(-50%)',

  width: '40%',
  height: '6%',

  borderRadius: '0 0 15px 15px',
  backgroundColor: theme.palette.black,

  zIndex: '1',

  '&:after': {
    content: '""',
    width: '40%',
    paddingBottom: '5%',
    borderRadius: '20px',
    background: '#191919',
    border: '2px solid #191919',
    display: 'block',
  },

  '&:before': {
    content: '""',
    width: '8%',
    paddingBottom: '8%',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.3)',
    border: '2px solid #212121',
    display: 'block',
    marginLeft: '10px',
  },
}));

const Screen = styled(Box)(({ theme }) => ({
  borderRadius: '20px',
  width: '94%',
  height: '97%',

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  backgroundColor: theme.palette.white,
}));

const Content = styled(Box)(() => ({
  width: '100%',
  height: '100%',

  borderRadius: '20px',

  padding: '45px 10px 20px 10px',

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  overflow: 'auto',
}));
