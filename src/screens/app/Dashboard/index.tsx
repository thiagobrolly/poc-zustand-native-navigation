import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../../../stores/authStore';

export function Dashboard() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  function handleSignUp() {
    navigation.navigate('activities', {
      screen: 'feed',
      params: { user: 'Liana' },
    });
  }

  function handleSignOut() {
    logout();
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#202024',
      }}
    >
      <Text>Dashboard</Text>

      <Text style={{ color: '#fff', fontSize: 20 }}>Nome: {user?.id}</Text>

      <TouchableOpacity
        onPress={handleSignUp}
        style={{
          backgroundColor: '#ff0',
        }}
      >
        <Text>Ir para: activities</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSignOut}
        style={{
          backgroundColor: '#f00',
        }}
      >
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
