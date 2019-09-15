import React, { PureComponent } from 'react';
import {  View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


export default class TimeTableScreen extends PureComponent {
    
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <WebView source={{ uri: 'https://drive.google.com/file/d/1b8hMw8QFLdDNVCbgPCCLqEZE-kBxZ1WP/view?usp=sharing' }}/>
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
