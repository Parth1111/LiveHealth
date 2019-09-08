import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Card} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function ActionListItem(props) {

    return (
      <Card style={{flexDirection: 'row'}}>
        <View style={styles.container}>

          <Ionicons
            name={props.icon}
            size={40}
            style={{ marginBottom: -3 }}
            color={Colors.livehealthGreen}/>
  
        <Text style={styles.text}>{props.title}</Text>
        </View>
      </Card>
    );
  }


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#0eb751',
    height: 50,
  }
});
