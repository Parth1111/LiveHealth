import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ClassItem from '../../components/ClassItem';

export default class ViewClassesScreen extends Component {
    render() {
        return (
            <View>
               <ClassItem class_name={"BE10"} class_attendance={"60"} teacher_name={"Kapil Dev"} teacher_mail={"parthsshah.97@gmail.com"}/>
            </View>
        )
    }
}
