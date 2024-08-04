import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../../../stores/authStore';

export function Profile() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleSignUp() {
    navigation.navigate('activities', {screen: 'messages'});
  }

  const { user} = useAuthStore((store) => {
    return {
      user: store.user,
    };
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#202024',
      }}
    >
      <Text style={{ color: '#fff', fontSize: 20 }}>Profile: {user?.name}</Text>

      <TouchableOpacity
        onPress={handleSignUp}
        style={{
          backgroundColor: '#ff0',
        }}
      >
        <Text>Ir para: activities messages</Text>
      </TouchableOpacity>
    </View>
  );
}
