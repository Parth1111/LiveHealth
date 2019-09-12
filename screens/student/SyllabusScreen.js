import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants } from 'expo';


export default class SyllabusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style={styles.container}>
  
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
  })
  
