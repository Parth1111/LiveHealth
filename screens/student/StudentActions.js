import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('ViewAttendance',{studentmail: student_email})}}>
          <ActListItem icon={'md-person'} title={"View Attendance"}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {this.props.navigation.navigate('NoticeBoardScreen', {studentmail: student_email})}}>
          <ActListItem icon={'md-clipboard'} title={"View Notice Board"}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <ActListItem icon={'md-calendar'} title={"View Time table"}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <ActListItem icon={'md-book'} title={"View Syllabus"}/>
        </TouchableOpacity>

      </View>
    );
  }
}
