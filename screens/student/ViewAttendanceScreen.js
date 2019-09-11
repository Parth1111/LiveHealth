import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native' 
import Color from '../../constants/Colors'
import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('testDB.db');


export default class ViewAttendanceScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentData: '',
        };
      }

      componentDidMount(){
        db.transaction((tx) => {
            tx.executeSql('select * from student_test where student_email = ?;', [this.props.navigation.getParam('studentmail')], 
            (tx, results) => {
                console.log(JSON.stringify(results));
                var len = results.rows.length;
                if(len > 0){
                    this.setState({studentData: results.rows.item(0)});
                }else{
                    console.log('Cannot get student attendance.');
                }
            }),
            (tx, results) => {
                console.log('error');
            }
        });
      }


    render() {

        return (
            <View style={styles.container}>
            <Text style={styles.attendanceText} numberOfLines={1} ellipsizeMode={'clip'} >{this.state.studentData.attendance}%</Text>
            <Text style={styles.lineText}>is your current attendance.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#FFFFFF',
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
