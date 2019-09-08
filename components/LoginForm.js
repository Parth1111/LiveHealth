import React, { Component } from 'react';
import { StyleSheet,View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
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
    }
});
