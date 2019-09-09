import React, { Component } from 'react';
import { StyleSheet,View, Text, TextInput, TouchableOpacity } from 'react-native'; 
import { withNavigation } from 'react-navigation';
import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('testDB.db');

 class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount(){
  db.transaction((tx) => {
        tx.executeSql('create table if not exists tabtest (id integer primary key, sym text, name text);', [], (tx) => {
            console.log('----created---');
        });
        tx.executeSql('SELECT * FROM tabtest;', [], (tx, results) => {
            console.log('any rows here ??');
        });
  }, null, function () {
        console.log('-- are we done--?--');
  });
  }


  addData = () => {
    db.transaction((tx) => {
      tx.executeSql('insert into tabtest (sym, name) values (?,?)', ["qwe","qwe"], (tx, results) => {
        console.log('added data');
      }, (tx) => {console.log('not added')});
}, null);
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            placeholder="username or email"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}/>
          <TextInput
            placeholder="password"
            returnKeyType="go"
            ref = {(input) => this.passwordInput = input}
            secureTextEntry
            style={styles.input}/>

            <TouchableOpacity style={styles.buttonContainer} onPress={this.addData}>
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
  }
});

export default withNavigation(LoginForm);