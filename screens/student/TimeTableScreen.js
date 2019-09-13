import React, { PureComponent } from 'react';
import {  View, StyleSheet } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';


export default class TimeTableScreen extends PureComponent {
    
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <PDFReader
          source={{
            uri: 'https://pict.edu/wp-content/uploads/2015/09/BE-CLASS-TT-New.pdf',
          }}
          />
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
