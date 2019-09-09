import React, { Component } from 'react'
import { Text,
        View, 
        TextInput, 
        TouchableOpacity, 
        StyleSheet, 
        KeyboardAvoidingView, 
        StatusBar, 
        Picker} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
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
              style={styles.input}/>


            <Picker
            itemStyle={{color: 'a9a9a9'}}
                selectedValue={this.state.language}
                onValueChange={(lang) => this.setState({language: lang})}
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
              autoCorrect={false}
              style={styles.input}/>


            <TextInput
              placeholder="Student's Email Address"
              placeholderTextColor="#a9a9a9"
              returnKeyType="next"
              keyboardType="default"
              autoCorrect={false}
              style={styles.input}/>


            <TextInput
              placeholder="Parent's Email Address"
              placeholderTextColor="#a9a9a9"
              returnKeyType="next"
              keyboardType="default"
              autoCorrect={false}
              style={styles.input}/>


            <TextInput
              placeholder="Password"
              placeholderTextColor="#a9a9a9"
              returnKeyType="go"
              ref = {(input) => this.passwordInput = input}
              secureTextEntry
              style={styles.input}/>
            
              <TouchableOpacity style={styles.buttonContainer}>
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
