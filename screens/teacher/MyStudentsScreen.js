import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StudentItem from '../../components/MyStudentsItem';

export default class MyStudentsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
          <StudentItem student_name={"Parth Shah"} student_attendance={"60"} student_mail={"parthsshah.97@gmail.com"} parent_mail={"shubhangishah@gmail.com"}/>
      </View>
    );
  }
}
