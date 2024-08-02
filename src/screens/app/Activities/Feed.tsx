import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivitiesNavigatorRoutesProps } from '@routes/activities.routes';
import { Text, TouchableOpacity, View } from 'react-native';

type RouteParams = {
  user: string;
};

export function Feed() {
  const navigation = useNavigation<ActivitiesNavigatorRoutesProps>();
  const route = useRoute();

  const { user } = route.params as RouteParams;

  function handleSignIn() {
    navigation.navigate('messages');
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
      <Text>Feed</Text>
      <Text>{user}</Text>

      <TouchableOpacity
        onPress={handleSignIn}
        style={{
          backgroundColor: '#f00',
        }}
      >
        <Text>Ir para: messages</Text>
      </TouchableOpacity>
    </View>
  );
}
