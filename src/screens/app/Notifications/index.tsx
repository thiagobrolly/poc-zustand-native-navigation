import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Text, TouchableOpacity, View } from 'react-native';

export function Notifications() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleSignUp() {
    navigation.navigate('profile');
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
      <Text>Notifications</Text>

      <TouchableOpacity
        onPress={handleSignUp}
        style={{
          backgroundColor: '#ff0',
        }}
      >
        <Text>Ir para: profile</Text>
      </TouchableOpacity>
    </View>
  );
}
