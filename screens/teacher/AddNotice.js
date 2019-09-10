import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('testDB.db');


export default class AddNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherData: '',
      notice_title: '',
      notice_body: '',
      notice_date: '',
    };
  }

  componentDidMount(){
    var today = new Date();
    date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+ today.getFullYear();
    console.log(date);
    this.setState({notice_date: date});
  }


  addNotice = () => {
    const {notice_title} = this.state;
    const {notice_body} = this.state;
    const {notice_date} = this.state;


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

    if(notice_title){
      if(notice_body){
        db.transaction((tx) => {
          tx.executeSql('insert into notice (class, notice_title, notice_body, notice_date) values (?,?,?,?)', [this.state.teacherData.class, notice_title, notice_body, notice_date],
          (tx,results) => {
            console.log('added notice');
            console.log(JSON.stringify(results));
            if(results.rowsAffected > 0){
              Alert.alert('Alert', 'Your notice has been added');
              this.props.navigation.navigate('TeacherActions');
            }
          }, console.log('error in adding notice'));
          //print notice table to console
          tx.executeSql('SELECT * FROM notice;', [], (tx, results) => {
            console.log('------------------------------- notice table data ----------------------------------');
            console.log(JSON.stringify(results));
            console.log('-------------------------------------------------------------------------------------');
          });
        })
      }
    }


  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            placeholder="Title"
            returnKeyType="next"
            onSubmitEditing={() => this.contentInput.focus()}
            autoCorrect={true}
            onChangeText={(notice_title) => this.setState({notice_title})}
            value={this.state.notice_title}
            style={styles.input}/>

            <TextInput
            multiline
            placeholder="Notice"
            returnKeyType="go"
            ref = {(input) => this.contentInput = input}
            onChangeText={(notice_body) => this.setState({notice_body})}
            value={this.state.notice_body}
            style={styles.contentinput}/>

            <TouchableOpacity style={styles.buttonContainer} onPress={this.addNotice}>
                <Text style={styles.buttonText}>Add Notice</Text>
            </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#FFFFFF'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(220,220,220,0.3)',
        marginBottom: 15,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#0eb751',
        paddingVertical: 15 
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
  contentinput: {
    minHeight: 40,
    maxHeight: 300,
    backgroundColor: 'rgba(220,220,220,0.3)',
    marginBottom: 15,
    paddingHorizontal: 10
  }
});
