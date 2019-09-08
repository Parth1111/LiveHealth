import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ActListItem from '../../components/ActionListItem';

export default class TeacherActions extends Component {
    render() {
        return (
            <View>
                <ActListItem icon={'md-people'} title={"My Students"}/>
                <ActListItem icon={'md-hand'} title={"Average Attendance"}/>
                <ActListItem icon={'md-clipboard'} title={"Add a notice"}/>
            </View>
        )
    }
}
