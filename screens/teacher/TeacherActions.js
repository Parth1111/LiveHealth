import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import ActListItem from '../../components/ActionListItem';

export default class TeacherActions extends Component {
    render() {
        const {navigation} = this.props;
        const teacher_email = navigation.getParam('teacher_email')
        return (
            <View>
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
            </View>
        )
    }
}
