import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { Dashboard } from '@screens/app/Dashboard';
import { NewActivity } from '@screens/app/NewActivity';
import { Notifications } from '@screens/app/Notifications';
import { Profile } from '@screens/app/Profile';

import ActivitiesIcon from '@assets/tab-bar-icons/activities.svg';
import { View } from 'react-native';
import { ActivitiesRoutes, ActivitiesRoutesProps } from './activities.routes';
import { NavigatorScreenParams } from '@react-navigation/native';

type AppRoutes = {
  dashboard: undefined;
  activities: NavigatorScreenParams<ActivitiesRoutesProps>;
  newActivity: undefined;
  notifications: undefined;
  profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: 20,
          position: 'absolute',
          height: 80,
          borderTopWidth: 0.5,
          backgroundColor: '#004E75',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
      }}
    >
      <Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 55,
                width: 55,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 90,
                backgroundColor: focused ? '#4077A1' : 'transparent',
              }}
            >
              <ActivitiesIcon />
            </View>
          ),
        }}
      />
      <Screen
        name="activities"
        component={ActivitiesRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 55,
                width: 55,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 90,
                backgroundColor: focused ? '#4077A1' : 'transparent',
              }}
            >
              <ActivitiesIcon />
            </View>
          ),
        }}
      />
      <Screen
        name="newActivity"
        component={NewActivity}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 55,
                width: 55,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 90,
                backgroundColor: focused ? '#4077A1' : 'transparent',
              }}
            >
              <ActivitiesIcon />
            </View>
          ),
        }}
      />
      <Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 55,
                width: 55,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 90,
                backgroundColor: focused ? '#4077A1' : 'transparent',
              }}
            >
              <ActivitiesIcon />
            </View>
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                height: 55,
                width: 55,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 90,
                backgroundColor: focused ? '#4077A1' : 'transparent',
              }}
            >
              <ActivitiesIcon />
            </View>
          ),
        }}
      />
    </Navigator>
  );
}
