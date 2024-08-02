import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Text, TouchableOpacity, View } from 'react-native';

export function Profile() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleSignUp() {
    navigation.navigate('activities', {screen: 'messages'});
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
      <Text>Profile</Text>

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
