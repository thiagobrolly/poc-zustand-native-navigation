import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuthStore } from '../stores/authStore';

export function Routes() {
  const theme = DefaultTheme;

  theme.colors.background = '#fff';

  // const auth = false;
  const user = useAuthStore((state) => state.user);

  return (
    <NavigationContainer theme={theme}>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
