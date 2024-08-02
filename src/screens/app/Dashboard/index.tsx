import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { Text, TouchableOpacity, View } from 'react-native';

export function Dashboard() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleSignUp() {
    navigation.navigate('activities', {
      screen: 'feed',
      params: { user: 'Liana' },
    });
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

      <TouchableOpacity
        onPress={handleSignUp}
        style={{
          backgroundColor: '#ff0',
        }}
      >
        <Text>Ir para: activities</Text>
      </TouchableOpacity>
    </View>
  );
}
