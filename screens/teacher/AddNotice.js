import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity } from 'react-native';

import Piechart from 'react-native-pie-chart';  
import Color from '../../constants/Colors'

export default class AddNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const chart_wh = 200
    const series = [60, 40]
    const sliceColor = [Color.livehealthGreen,'#FFEB3B']
    return (
      <View style={styles.container}>
          <TextInput
            placeholder="Title"
            returnKeyType="next"
            onSubmitEditing={() => this.contentInput.focus()}
            autoCorrect={true}
            style={styles.input}/>

            <TextInput
            multiline
            placeholder="Notice"
            returnKeyType="go"
            ref = {(input) => this.contentInput = input}
            style={styles.contentinput}/>

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Add Notice</Text>
            </TouchableOpacity>

            <Piechart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}/>

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
