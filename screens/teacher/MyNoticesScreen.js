import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import  NoticeItem  from '../../components/NoticeBoardItem';
import { SQLite } from 'expo-sqlite';


const db = SQLite.openDatabase('testDB.db');

export default class MyNoticesScreen extends Component {

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
                  console.log('ababab');
              }else{
                  console.log('Cannot get teachers data.');
              }
            }),
            (tx, results) => {
              console.log('error');
            }
          })


          db.transaction((tx) => {
            tx.executeSql('select * from notice where class = ?;', [this.state.teacherData.class],
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
                    <NoticeItem title={item.notice_title} content={item.notice_body}  date={item.notice_date}/>
                    </View>
                )}/>

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
