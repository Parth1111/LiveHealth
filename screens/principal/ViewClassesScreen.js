import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import ClassItem from '../../components/ClassItem';
import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('testDB.db');

export default class ViewClassesScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          ListItems: [],
          teacherData: '',
          studentData: '',
        };

        db.transaction((tx) => {
            tx.executeSql('select * from teacher_test;', [],
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
            <View style={styles.container}>
            <FlatList
            data={this.state.ListItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View key={item.user_id}>
                <ClassItem class_name={item.class} class_attendance={"60"} teacher_name={item.teacher_name} teacher_mail={item.teacher_email}/>
                </View>
            )}
            />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom:15,
        backgroundColor: '#FFFFFF'
    },
});
