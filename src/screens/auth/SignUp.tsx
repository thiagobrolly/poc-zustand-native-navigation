import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

export function SignUp() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.goBack();
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
      <Text>SignUp</Text>

      <TouchableOpacity onPress={handleSignIn}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
}
