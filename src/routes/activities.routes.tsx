import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { Feed } from '@screens/app/Activities/Feed';
import { Messages } from '@screens/app/Activities/Messages';

export type ActivitiesRoutesProps = {
  activities: undefined;
  feed: { feed: string};
  messages: undefined;
};

export type ActivitiesNavigatorRoutesProps =
  NativeStackNavigationProp<ActivitiesRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<ActivitiesRoutesProps>();

export function ActivitiesRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="feed" component={Feed} />
      <Screen name="messages" component={Messages} />
    </Navigator>
  );
}
