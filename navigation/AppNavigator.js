import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import StudentActions from '../screens/student/StudentActions';
import TeacherActions from '../screens/teacher/TeacherActions';
import PrincipalActions from '../screens/principal/PrincipalActions';
import NoticeBoardScreen from '../screens/student/NoticeBoardScreen';
import MyStudentsScreen from '../screens/teacher/MyStudentsScreen';
import ViewClassesScreen from '../screens/principal/ViewClassesScreen';
import AddNotice from '../screens/teacher/AddNotice';
import ViewAttendanceScreen from '../screens/student/ViewAttendanceScreen';
import MyNoticesScreen from '../screens/teacher/MyNoticesScreen';
import AverageAttendanceScreen from '../screens/teacher/AverageAttendanceScreen';
import TimeTableScreen from '../screens/student/TimeTableScreen';
import SyllabusScreen from '../screens/student/SyllabusScreen';

const StudentStack = createStackNavigator({
  StudentActions: StudentActions,
  ViewAttendance: ViewAttendanceScreen,
  NoticeBoardScreen: NoticeBoardScreen,
  TimeTable: TimeTableScreen,
  Syllabus: SyllabusScreen,
})

const TeacherStack = createStackNavigator({
  TeacherActions: TeacherActions,
  MyStudentsScreen: MyStudentsScreen,
  AverageAttendance: AverageAttendanceScreen,
  MyNotices: MyNoticesScreen,
  AddNotice: AddNotice,
})

const PrincipalStack = createStackNavigator({
  PrincipalActions: PrincipalActions,
  ViewClassesScreen: ViewClassesScreen,
})

const AuthStack = createStackNavigator({Login: LoginScreen, SignUp: SignUpScreen});


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthStack,
    Student: StudentStack,
    Teacher: TeacherStack,
    Principal: PrincipalStack,
  },{
   // Main: MainTabNavigator
   initialRouteName: 'Auth',
  })
);
