import React from 'react';
import { Image, Dimensions } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screen from '../screens';
import Images from '../assets/images';
import { BottomTabBarStyle } from '../styles';
import { ICON, TEXT_PRIMARY } from '../styles/Colors';

const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={Screen.Home} />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Chat' component={Screen.Chat} />
    </Stack.Navigator>
  );
};

const NewsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='News' component={Screen.News} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Profile' component={Screen.Profile} />
    </Stack.Navigator>
  );
};

const TabBarStack = () => (
  <Tab.Navigator
    initialRouteName='Tabs'
    screenOptions={({route}) => ({
      tabBarStyle: BottomTabBarStyle.container,
      tabBarLabelStyle: BottomTabBarStyle.label,
      tabBarIcon: ({focused, size}) => {
        let icon;
        if (route.name === 'HomeTabs') {
          icon = Images.icFeed;
        } else if (route.name === 'ChatTabs') {
          icon = Images.icChat;
        } else if (route.name === 'NewsTabs') {
          icon = Images.icNews;
        } else if (route.name === 'ProfileTabs') {
          icon = Images.icProfile;
        }
        return (
          <Image
            source={icon}
            style={{
              width: 22,
              height: 22,
              tintColor: route.name === 'ProfileTabs' ? null : focused ? TEXT_PRIMARY : ICON,
            }}
          />
        );
      },
      tabBarActiveTintColor: '#ffffff',
      tabBarInactiveTintColor: '#ffffff',
      tabBarVisible: false,
    })}>
    <Tab.Screen
      name="HomeTabs"
      component={HomeStack}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
      }}
    />
    <Tab.Screen
      name="ChatTabs"
      component={ChatStack}
      options={{
        headerShown: false,
        tabBarLabel: 'Chat',
      }}
    />
    <Tab.Screen
      name="NewsTabs"
      component={NewsStack}
      options={{
        headerShown: false,
        tabBarLabel: 'Profil',
      }}
    />
    <Tab.Screen
      name="ProfileTabs"
      component={ProfileStack}
      options={{
        headerShown: false,
        tabBarLabel: 'Profil',
      }}
    />
  </Tab.Navigator>
);

const AppContainer = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name='Tabs'
          component={TabBarStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Home'
          component={HomeStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  </NavigationContainer>
  );
};
export default AppContainer;
