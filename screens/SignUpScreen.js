import React, { Component } from 'react'
import { Text,
        View, 
        TextInput, 
        TouchableOpacity, 
        StyleSheet, 
        KeyboardAvoidingView, 
        StatusBar, 
        Picker,
        Alert} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('testDB.db');

class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          student_name: '',
          student_class: '',
          rollno: '',
          student_email: '',
          parent_email: '',
          password: ''
        };
      }




registerUser = () => {
  const {student_name} = this.state;
  const {student_class} = this.state;
  const {rollno} = this.state;
  const {student_email} = this.state;
  const {parent_email} = this.state;
  const {password} = this.state;

  if(student_name){
    if(student_class){
      if(rollno){
        if(student_email){
          if(parent_email){
            if(password){
              db.transaction((tx) => {
                tx.executeSql('insert into student_test (student_name, class, rollno, student_email, parent_email, password, attendance) values (?,?,?,?,?,?,?)', [student_name,student_class, rollno, student_email, parent_email, password, Math.floor(Math.random() * 100) + 1], (tx, results) => {
                  console.log('added student data');
                  if(results.rowsAffected > 0){
                    Alert.alert('Congratulations!', 'You are registered. You may now login.');
                    this.props.navigation.navigate('Login');
                  }else{
                    Alert.alert('Registration failed');
                  }
                }, (tx) => {Alert.alert('Alert','User already exists.')});

                      //print student table to console
                tx.executeSql('SELECT * FROM student_test;', [], (tx, results) => {
                  console.log(JSON.stringify(results));
                });

              })
            }else{
              Alert.alert('Alert','Password is a compulsory field.');
            }
          }else{
            Alert.alert('Alert','Parent email is a compulsory field.');
          }
        }else{
          Alert.alert('Alert','Student email is a compulsory field.');
        }
      }else{
        Alert.alert('Alert','Roll number is a compulsory field.');
      }
    }else{
      Alert.alert('Alert','Class is a compulsory field.');
    }
  }else{
    Alert.alert('Alert','Student name is a compulsory field.');
  }

  
}


    render() {
        return (
            <ScrollView>
            <KeyboardAvoidingView behavior="position" style={styles.container}>
            <TextInput
              placeholder="Student Name"
              placeholderTextColor="#a9a9a9"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCorrect={false}
              onChangeText={(student_name) => this.setState({student_name})}
              value={this.state.student_name}
              style={styles.input}/>


            <Picker
            itemStyle={{color: '#a9a9a9'}}
                selectedValue={this.state.student_class}
                onValueChange={(student_class) => this.setState({student_class})}
                style={styles.picker}>
                <Picker.Item  color="#a9a9a9" label="Class" value=''/>
                <Picker.Item  label="BE1" value="BE1"/>
                <Picker.Item  label="BE2" value="BE2"/>
                <Picker.Item  label="BE3" value="BE3"/>
                <Picker.Item  label="BE4" value="BE4"/>
                <Picker.Item  label="BE5" value="BE5"/>
                <Picker.Item  label="BE6" value="BE6"/>
                <Picker.Item  label="BE7" value="BE7"/>
                <Picker.Item  label="BE8" value="BE8"/>
                <Picker.Item  label="BE9" value="BE9"/>
                <Picker.Item  label="BE10" value="BE10"/>
            </Picker>

            <TextInput
              placeholder="Roll Number"
              placeholderTextColor="#a9a9a9"
              returnKeyType="next"
              keyboardType="default"
              onChangeText={(rollno) => this.setState({rollno})}
              value={this.state.rollno}
              autoCorrect={false}
              style={styles.input}/>


            <TextInput
              placeholder="Student's Email Address"
              placeholderTextColor="#a9a9a9"
              returnKeyType="next"
              keyboardType="email-address"
              onChangeText={(student_email) => this.setState({student_email})}
              value={this.state.student_email}
              autoCorrect={false}
              style={styles.input}/>


            <TextInput
              placeholder="Parent's Email Address"
              placeholderTextColor="#a9a9a9"
              returnKeyType="next"
              keyboardType="email-address"
              onChangeText={(parent_email) => this.setState({parent_email})}
              value={this.state.parent_email}
              autoCorrect={false}
              style={styles.input}/>


            <TextInput
              placeholder="Password"
              placeholderTextColor="#a9a9a9"
              returnKeyType="go"
              ref = {(input) => this.passwordInput = input}
              secureTextEntry
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              style={styles.input}/>
            
              <TouchableOpacity style={styles.buttonContainer} onPress={this.registerUser.bind(this)}>
                  <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
  
        </KeyboardAvoidingView>
        </ScrollView>
        )
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
    picker: {
        width: '100%',
        backgroundColor: 'rgba(220,220,220,0.3)',
        marginBottom: 15,
        paddingHorizontal: 10
    }
});

export default SignUpScreen;
