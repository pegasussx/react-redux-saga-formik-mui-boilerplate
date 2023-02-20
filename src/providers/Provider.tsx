import { Provider as StoreProvider } from 'react-redux';
import { AppThemeProvider } from './ThemeProvider';
import { store } from '../redux/store';
/**
 * Define Provider For Whole Project
 */
interface Props {
  children: React.ReactNode;
}
export const Provider = ({ children }: Props) => {
  return (
    <AppThemeProvider>
      <StoreProvider store={store}>{children}</StoreProvider>
    </AppThemeProvider>
  );
};
