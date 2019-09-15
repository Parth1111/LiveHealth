import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


export default class SyllabusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style={styles.container}>
        <WebView source={{ uri: 'https://drive.google.com/file/d/1VJ3kd2bS4yJEXkQzLhqHirHZVnVbcrwu/view?usp=sharing' }}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
    },
  })
  
