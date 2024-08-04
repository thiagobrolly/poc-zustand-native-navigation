import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../../../stores/authStore';
import { useActiveUserQuery } from '../../../graphql/generated';
import { useEffect } from 'react';

export function Dashboard() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { user, setUser, logout } = useAuthStore((store) => {
    return {
      user: store.user,
      setUser: store.setUser,
      logout: store.logout,
    };
  });

  const { data: activeUserData, loading } = useActiveUserQuery();

  useEffect(() => {
    if (activeUserData?.activeUser && (!user || user.id !== activeUserData.activeUser.id)) {
      setUser({
        id: activeUserData?.activeUser.id,
        name: activeUserData?.activeUser.name,
      });
    }
  }, [activeUserData]);

  function handleSignUp() {
    navigation.navigate('activities', {
      screen: 'feed',
      params: { feed: 'Feed Params' },
    });
  }

  function handleSignOut() {
    logout();
  }

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#202024',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 20 }}>Carregando</Text>
      </View>
    );
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
      <Text>User: {user?.name}</Text>

      <Text style={{ color: '#fff', fontSize: 20 }}>Nome: {activeUserData?.activeUser.name}</Text>

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
