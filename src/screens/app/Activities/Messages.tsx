// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

export function Messages() {
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
      <Text>Messages</Text>

      <TouchableOpacity onPress={handleSignIn}
        style={{
          backgroundColor: '#f00',
        }}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
