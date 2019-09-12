import React, { Component } from 'react';
import { StyleSheet,View, Text, TextInput, TouchableOpacity, Picker, AsyncStorage, Alert } from 'react-native'; 
import { withNavigation } from 'react-navigation';
import { SQLite } from 'expo-sqlite';


const db = SQLite.openDatabase('testDB.db');

 class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      role: '',
      username: '',
      password: '',
    };
  }

  _logInAsync = async () => {
    let role = this.state.role;
    let username = this.state.username;
    let password = this.state.password;
    AsyncStorage.setItem('role', role);
    AsyncStorage.setItem('username', username);
    AsyncStorage.setItem('password', password);
    
    if(role === 'StudentActions' && username && password){
      this.props.navigation.navigate(role, {student_email: username});
    }else if(role === 'TeacherActions' && username && password){
      this.props.navigation.navigate(role, {teacher_email: username});
    }else{
      this.props.navigation.navigate(role)
    }
  };


  componentWillMount(){
    this._logInAsync();
  }


  componentDidMount(){
    //Creating tables and prepopulating teacher_test table.
    db.transaction((tx) => {

      //teacher table creation 
      tx.executeSql('create table if not exists teacher_test (teacher_name text, class text, teacher_email text unique, password text);', [], (tx) => {
            console.log('--teacher table created--');
        });
      
      //student table creation
      tx.executeSql('create table if not exists student_test (student_name text, class text, rollno integer, student_email text unique, parent_email text, password text, attendance integer);', [], (tx) => {
          console.log('--student table created--');
      });


      //prinicipal table creation
      tx.executeSql('create table if not exists principal_test (principal_email text unique, password text);', [], (tx) => {
        console.log('--principal table created--');
      })

      //notice table creation
      tx.executeSql('create table if not exists notice (class text, notice_title text, notice_body text, notice_date text);', [], (tx) => {
        console.log('--notice table created--');
      })



      //prepopulating teacher table
      tx.executeSql('insert into teacher_test (teacher_name, class, teacher_email, password) values (?,?,?,?)', ["teacher1","BE1", "teacher1@gmail.com", "teacher1"], (tx, results) => {
        console.log('added data1');
      }, (tx) => {console.log('not added')});

      tx.executeSql('insert into teacher_test (teacher_name, class, teacher_email, password) values (?,?,?,?)', ["teacher2","BE2", "teacher2@gmail.com", "teacher2"], (tx, results) => {
        console.log('added data2');
      }, (tx) => {console.log('not added')});

      tx.executeSql('insert into teacher_test (teacher_name, class, teacher_email, password) values (?,?,?,?)', ["teacher3","BE3", "teacher3@gmail.com", "teacher3"], (tx, results) => {
        console.log('added data3');
      }, (tx) => {console.log('not added')});
      
      tx.executeSql('insert into teacher_test (teacher_name, class, teacher_email, password) values (?,?,?,?)', ["teacher4","BE4", "teacher4@gmail.com", "teacher4"], (tx, results) => {
        console.log('added data4');
      }, (tx) => {console.log('not added')});

      tx.executeSql('insert into teacher_test (teacher_name, class, teacher_email, password) values (?,?,?,?)', ["teacher5","BE5", "teacher5@gmail.com", "teacher5"], (tx, results) => {
        console.log('added data5');
      }, (tx) => {console.log('not added')});

      tx.executeSql('insert into teacher_test (teacher_name, class, teacher_email, password) values (?,?,?,?)', ["teacher6","BE6", "teacher6@gmail.com", "teacher6"], (tx, results) => {
        console.log('added data6');
      }, (tx) => {console.log('not added')});

      tx.executeSql('insert into teacher_test (teacher_name, class, teacher_email, password) values (?,?,?,?)', ["teacher7","BE7", "teacher7@gmail.com", "teacher7"], (tx, results) => {
        console.log('added data7');
      }, (tx) => {console.log('not added')});

      tx.executeSql('insert into teacher_test (teacher_name, class, teacher_email, password) values (?,?,?,?)', ["teacher8","BE8", "teacher8@gmail.com", "teacher8"], (tx, results) => {
        console.log('added data8');
      }, (tx) => {console.log('not added')});

      tx.executeSql('insert into teacher_test (teacher_name, class, teacher_email, password) values (?,?,?,?)', ["teacher9","BE9", "teacher9@gmail.com", "teacher9"], (tx, results) => {
        console.log('added data9');
      }, (tx) => {console.log('not added')});

      tx.executeSql('insert into teacher_test (teacher_name, class, teacher_email, password) values (?,?,?,?)', ["teacher10","BE10", "teacher10@gmail.com", "teacher10"], (tx, results) => {
        console.log('added data10');
      }, (tx) => {console.log('not added')});

      //populating principal table
      tx.executeSql('insert into principal_test (principal_email, password) values (?,?)', ["principal@gmail.com", "principal"], (tx,results) => {
        console.log('added data to principal table');
      }, (tx) => {console.log('cant add data to principal table')});

      //print teacher table to console
      tx.executeSql('SELECT * FROM teacher_test;', [], (tx, results) => {
        console.log('------------------------------- teacher table data ----------------------------------');
        console.log(JSON.stringify(results));
        console.log('-------------------------------------------------------------------------------------');
      });

      //print principal table to console
      tx.executeSql('SELECT * FROM principal_test;', [], (tx, results) => {
        console.log('------------------------------- principal table data ----------------------------------');
        console.log(JSON.stringify(results));
        console.log('-------------------------------------------------------------------------------------');
      });

  }, null, function () {
        console.log('-- are we done--?--');
  });
  }


clearInputs = () => {
  this.setState({role: ''});
  this.setState({username: ''});
  this.setState({password: ''});
}


handleLogin = () => {
  const {role} = this.state;
  const {username} = this.state;
  const {password} = this.state;

  if(role){
    if(username){
      if(password){
        if(role === 'StudentActions'){
          //code for checking student table and opening student page.
          db.transaction((tx) => {
            tx.executeSql('select * from student_test where student_email = ? and password = ?;',[username, password],
            (tx, results) => {
              console.log(JSON.stringify(results));
              var len = results.rows.length;
              if(len > 0){
                this.props.navigation.navigate(this.state.role, {student_email: this.state.username});
                console.log("user exists.");
              }else{
                console.log("user does not exist."); 
                Alert.alert('Alert','User does not exist.'); 
                this.clearInputs();             
              }
            })
          })

        }else if(role === 'TeacherActions'){
          //code for checking teacher table and opening teacher page.
          db.transaction((tx) => {
            tx.executeSql('select * from teacher_test where teacher_email = ? and password = ?;',[username, password],
            (tx, results) => {
              console.log(JSON.stringify(results));
              var len = results.rows.length;
              if(len > 0){
                this.props.navigation.navigate(this.state.role, {teacher_email: this.state.username});
                console.log("user exists.");
              }else{
                console.log("user does not exist.");
                Alert.alert('Alert','User does not exist.');
                this.clearInputs();
              }
            })
          })

        }else{
          //code for checking principal table and opening principal page.
          db.transaction((tx) => {
            tx.executeSql('select * from principal_test where principal_email = ? and password = ?;', [username, password],
            (tx,results) => {
              console.log(JSON.stringify(results));
              var len = results.rows.length;
              if(len > 0){
                this.props.navigation.navigate(this.state.role);
              }else{
                console.log("user does not exist.");
                Alert.alert('Alert', 'User does not exist.');
                this.clearInputs();
              }
            })
          })
        }
      }else{
        Alert.alert('Alert','Password is a compulsory field.');
      }
    }else{
      Alert.alert('Alert', 'Email Address is a compulsory field.');
    }
  }else{
    Alert.alert('Alert','Please select your role.');
  }
}

  render() {
    return (
      <View style={styles.container}>
          <Picker
            itemStyle={{color: '#a9a9a9'}}
            selectedValue={this.state.role}
            onValueChange={(role) => this.setState({role})}
            style={styles.picker}>
            <Picker.Item  color="#a9a9a9" label="I am a" value=''/>
            <Picker.Item  label="Teacher" value="TeacherActions"/>
            <Picker.Item  label="Student" value="StudentActions"/>
            <Picker.Item  label="Principal" value="PrincipalActions"/>
          </Picker>
        
          <TextInput
            placeholder="email address"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            style={styles.input}/>


          <TextInput
            placeholder="password"
            returnKeyType="go"
            ref = {(input) => this.passwordInput = input}
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            style={styles.input}/>

            <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('SignUp')}} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              New student? Sign Up!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
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
      signUpContainer: {
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  picker: {
    width: '100%',
    backgroundColor: 'rgba(220,220,220,0.3)',
    marginBottom: 15,
    paddingHorizontal: 10
  }
});

export default withNavigation(LoginForm);