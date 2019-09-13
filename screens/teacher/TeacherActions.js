import React, { Component } from 'react'
import { Text, View, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native'
import Color from '../../constants/Colors'
import ActListItem from '../../components/ActionListItem';

export default class TeacherActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }


    render() {
        const {navigation} = this.props;
        const teacher_email = navigation.getParam('teacher_email')
        return (
            <View>

                <Text style={styles.helloText}>Welcome,</Text>
                <Text style={styles.emailText}>{teacher_email}</Text>
                
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('MyStudentsScreen', {teachermail: teacher_email})}}>
                    <ActListItem icon={'md-people'} title={"My Students"}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('AverageAttendance', {teachermail: teacher_email})}}>
                    <ActListItem icon={'md-hand'} title={"Average Attendance"}/>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {this.props.navigation.navigate('MyNotices', {teachermail: teacher_email})}}>
                    <ActListItem icon={'md-clipboard'} title={"My Notices"}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('AddNotice', {teachermail: teacher_email})}}>
                    <ActListItem icon={'md-clipboard'} title={"Add a notice"}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this._logOutAsync()}}>
                    <ActListItem icon={'md-log-out'} title={"Log out"}/>
                </TouchableOpacity>
            </View>
        )
    }

    _logOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
}

const styles = StyleSheet.create({
    helloText: {
      color: Color.livehealthGreen,
      fontSize: 20,
      fontStyle: 'italic',
      paddingLeft:20,
      paddingTop:20,
    },
    emailText: {
      color: Color.livehealthGreen, 
      fontSize: 15, 
      paddingLeft:20, 
      fontStyle: 'italic'
    }
  })
  
