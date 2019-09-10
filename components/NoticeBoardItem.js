import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';


export default function NoticeBoardItem(props) {

        return (
            <Card style={{flexDirection: 'row'}}>
            <View style={styles.container}>
                <Text numberOfLines={1} ellipsizeMode={'clip'} style={styles.titletext}>{props.title}</Text>
                <Text style={styles.content}>{props.content}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
          </Card>
        );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    titletext: {
      alignSelf: 'flex-start',
      fontSize: 17,
      fontWeight: 'bold',
      height: 50,
    },
    content: {
        alignSelf: 'flex-start',
        fontSize: 15,
    },
    date: {
        alignSelf: 'flex-end',
        fontSize: 12,
    }
  });

