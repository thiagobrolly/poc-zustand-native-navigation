import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../../stores/authStore';

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const setUser = useAuthStore((state) => state.setUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    setUser({ id: email, token: '123' });
  }

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
        gap: 10,
      }}
    >
      <Text style={{ color: '#fff', fontSize: 20 }}>SignIn</Text>

      <TextInput
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        style={{ backgroundColor: '#fff', color: '#000', width: 300 }}
      />

      <TextInput
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ backgroundColor: '#fff', color: '#000', width: 300 }}
      />

      <TouchableOpacity onPress={handleSignIn}>
        <Text style={{ color: '#fff', fontSize: 20 }}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={{ color: '#fff', fontSize: 20 }}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}
