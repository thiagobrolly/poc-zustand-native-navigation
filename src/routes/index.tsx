import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const theme = DefaultTheme;

  theme.colors.background = '#fff';

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />
    </NavigationContainer>
  );
}
