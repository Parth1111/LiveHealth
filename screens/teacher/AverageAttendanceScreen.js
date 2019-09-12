import React, { PureComponent } from 'react';
import {  View, Text, StyleSheet, ImageBackground } from 'react-native';
import AnimateNumber from 'react-native-animate-number'
import Color from '../../constants/Colors'
import { SQLite } from 'expo-sqlite';


const db = SQLite.openDatabase('testDB.db');

export default class AverageAttendanceScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
        teacherData: '',
        studentData: '',
    };


    db.transaction((tx) => {
        tx.executeSql('select * from teacher_test where teacher_email = ?;', [this.props.navigation.getParam('teachermail')],
        (tx, results) => {
          console.log(JSON.stringify(results));
          var len = results.rows.length;
          if(len > 0){
              this.setState({teacherData: results.rows.item(0)});
          }else{
              console.log('Cannot get teachers data.');
          }
        }),
        (tx, results) => {
          console.log('error');
        }
      })

      db.transaction((tx) => {
        tx.executeSql('select avg(attendance) avg from student_test where class = ?;', [this.state.teacherData.class],
        (tx, results) => {
          console.log(JSON.stringify(results));
          var len = results.rows.length;
          if(len > 0){
            this.setState({studentData: results.rows.item(0)});
          }else{
            console.log('Cannot get average attendance of students.');
          }
        }),
        (tx, results) => {
          console.log('error');
        }
      })

  }

  render() {
    return (
      <ImageBackground source={require('../../assets/images/background4.png')} style={{flex: 1}}>
      <View style={styles.container}>
      <AnimateNumber value={this.state.studentData.avg} style={styles.attendanceText} formatter={(val) => {
                return parseFloat(val).toFixed(1) + '%'}}/>
      <Text style={styles.lineText}>is the average attendance of your class.</Text>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      paddingLeft: 20,
      paddingRight: 20,
  },
  attendanceText: {
      alignSelf: 'center',
      paddingTop: '30%',
      fontSize: 70,
      color: Color.livehealthGreen, 
  },
  lineText: {
      alignSelf: 'center',
      color: Color.livehealthGreen,
  }
});