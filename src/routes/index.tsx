import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuthStore } from '../stores/authStore';

export function Routes() {
  const theme = DefaultTheme;

  theme.colors.background = '#fff';

  const token = useAuthStore((state) => state.token);

  console.log('CXXXXXXXXXXXXXXXXXXXXXX', token)

  return (
    <NavigationContainer theme={theme}>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
