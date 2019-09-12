import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Card} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function ActionListItem(props) {

    return (
      <View>
      <Card>
        <View style={{flexDirection: 'row', paddingStart: 10}}>

        <View style={styles.container}>
          <Ionicons
            name={props.icon}
            size={30}
            />
        </View>

        <View style={{paddingLeft: 10, paddingRight: 10}}/>        
        <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
        </View>

        </View>
      </Card>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 10
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    height: 40,
  }
});
