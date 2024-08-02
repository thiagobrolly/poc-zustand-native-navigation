import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Text, TouchableOpacity, View } from 'react-native';

export function NewActivity() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleSignUp() {
    navigation.navigate('activities', {
      screen: 'feed',
      params: { user: 'Thiago' },
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
      <Text>NewActivity</Text>

      <TouchableOpacity onPress={handleSignUp}>
        <Text>Feed longe</Text>
      </TouchableOpacity>
    </View>
  );
}
