import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';

import { PText } from 'components/display/text';
import { ToogleButton } from 'components/inputs/toogle-button';

import { FONT_SIZES, FONT_WEIGHTS } from 'config/theme-fonts';
import { type RootState } from 'redux/store';
import { logoutAction } from 'redux/slices/auth.slice';

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.me);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <Wrapper>
      <PText size={FONT_SIZES.lg} weight={FONT_WEIGHTS.bold}>
        Welcome, {user.firstName} {user.lastName}
      </PText>

      <ToogleButton onClick={handleLogout}>Log out</ToogleButton>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',

  gap: '12px',

  padding: '0px 10px',
  paddingTop: '30px',

  width: '100%',
  height: '100%',
}));
