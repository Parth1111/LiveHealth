import React, { Component } from 'react';
import { View, TouchableOpacity, AsyncStorage, Text, StyleSheet } from 'react-native';
import Color from '../../constants/Colors'
import ActListItem from '../../components/ActionListItem';

export default class StudentActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {navigation} = this.props;
    const student_email = navigation.getParam('student_email')
    return (
      <View>

      <Text style={styles.helloText}>Welcome,</Text>
      <Text style={styles.emailText}>{student_email}</Text>


        <TouchableOpacity onPress={() => {this.props.navigation.navigate('ViewAttendance',{studentmail: student_email})}}>
          <ActListItem icon={'md-person'} title={"View Attendance"}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {this.props.navigation.navigate('NoticeBoardScreen', {studentmail: student_email})}}>
          <ActListItem icon={'md-clipboard'} title={"View Notice Board"}/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('TimeTable')}}>
          <ActListItem icon={'md-calendar'} title={"View Time table"}/>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Syllabus')}}>
          <ActListItem icon={'md-book'} title={"View Syllabus"}/>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {this._logOutAsync()}}>
          <ActListItem icon={'md-log-out'} title={"Log out"}/>
        </TouchableOpacity>

      </View>
    );
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
