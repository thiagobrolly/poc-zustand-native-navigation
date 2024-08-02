import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { Text, TouchableOpacity, View } from 'react-native';

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleSignUp() {
    navigation.navigate('signUp');
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
      <Text>SignIn</Text>

      <TouchableOpacity onPress={handleSignUp}>
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}
