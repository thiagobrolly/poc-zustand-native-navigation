import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../../stores/authStore';
import {
  useActiveUserQuery,
  useLoginAppMutation,
} from '../../graphql/generated';
import { ApolloError } from '@apollo/client';
import { useAuth } from '@hooks/useAuth';

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  // const setToken = useAuthStore((state) => state.setToken);
  // const { setToken, setUser, logout } = useAuthStore();

  const [email, setEmail] = useState('superadmin@espiral.com');
  const [password, setPassword] = useState('superadmin');
  const { login } = useAuth();

  // const [loginAppMutation] = useLoginAppMutation();


  // const { data: dataActiveUser, loading, error } = useActiveUserQuery();
  // const { data: activeUserData } = useActiveUserQuery({
  //   skip: !useAuthStore().token, // Skip query if not logged in
  // });

  const handleLogin = async () => {
    await login(email, password);
  };

  
  // async function handleSignIn() {
  //   try {
  //     const { data } = await loginAppMutation({
  //       variables: {
  //         input: {
  //           email,
  //           password,
  //         },
  //       },
  //       // refetchQueries: ['Activities'],
  //     });

  //     if (data?.loginApp) {
  //       // setToken(data.login.token, data.login.refreshToken);
  //       setToken({
  //         token: data?.loginApp.accessToken ?? '',
  //         refreshToken: data?.loginApp.refreshToken ?? '',
  //       });
  //       await fetchActiveUser();
  //     }

      

  //     // toast.success('Atividade deletada com sucesso')

  //     // navigate({
  //     //   to: '/app/activities',
  //     // })
  //   } catch (error) {
  //     if (error instanceof ApolloError) {
  //       console.log(error.message);
  //     } else {
  //       console.log('Ocorreu um erro desconhecido');
  //     }
  //   }
  // }

  // function handleSignIn() {
  //   setUser({ id: email, token: '123' });
  // }

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

      <TouchableOpacity onPress={handleLogin}>
        <Text style={{ color: '#fff', fontSize: 20 }}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={{ color: '#fff', fontSize: 20 }}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}
