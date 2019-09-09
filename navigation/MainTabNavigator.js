import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import StudentActions from '../screens/student/StudentActions';
import TeacherActions from '../screens/teacher/TeacherActions';
import PrincipalActions from '../screens/principal/PrincipalActions';
import NoticeBoardScreen from '../screens/student/NoticeBoardScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});



const HomeStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
    StudentActions: StudentActions,
    TeacherActions: TeacherActions,
    PrincipalActions: PrincipalActions,
    NoticeBoardScreen: NoticeBoardScreen,
  },
  config
);


HomeStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarOptions:{
    activeTintColor: '#0eb751'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-log-in'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarOptions:{
    activeTintColor: '#0eb751'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarOptions:{
    activeTintColor: '#0eb751'
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
