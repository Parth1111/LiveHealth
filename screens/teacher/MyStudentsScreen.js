import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import StudentItem from '../../components/MyStudentsItem';
import { SQLite } from 'expo-sqlite';


const db = SQLite.openDatabase('testDB.db');

export default class MyStudentsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ListItems: [],
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
      tx.executeSql('select * from student_test where class = ?;', [this.state.teacherData.class],
      (tx, results) => {
        console.log(JSON.stringify(results));
        var len = results.rows.length;
        if(len > 0){
          this.setState({studentData: results.rows.item(0)});

          var temp = [];

          for(let i=0; i<results.rows.length; ++i){
            temp.push(results.rows.item(i));
          }

          this.setState({
            ListItems: temp,
          });

        }else{
          console.log('Cannot get students data.');
        }
      }),
      (tx, results) => {
        console.log('error');
      }
    })
  }


  render() {
    return (
      <View>
          {/* <StudentItem student_name={this.state.studentData.student_name} student_attendance={this.state.studentData.attendance} student_mail={this.state.studentData.student_email} parent_mail={this.state.studentData.parent_email}/> */}
          <FlatList
          data={this.state.ListItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.user_id}>
              <StudentItem student_name={item.student_name} student_attendance={item.attendance} student_mail={item.student_email} parent_mail={item.parent_email}/>
            </View>
          )}
        />
        
      </View>
    );
  }
}
