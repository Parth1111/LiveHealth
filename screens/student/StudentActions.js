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
    return (
      <View>
        <ActListItem icon={'md-person'} title={"View Attendance"}/>
        <ActListItem icon={'md-clipboard'} title={"View Notice Board"}/>
        <ActListItem icon={'md-calendar'} title={"View Time table"}/>
        <ActListItem icon={'md-book'} title={"View Syllabus"}/>
      </View>
    );
  }
}
