import React, { Component } from 'react'
import { Text, View, StyleSheet, Linking } from 'react-native'
import { Card } from 'react-native-elements';

export default function ClassItem(props) {

        return (
            <View>
            <Card>
                <View style={{flexDirection: 'row'}}>
                     <View style={styles.container}>
                         <Text style={styles.content}>Class </Text>
                         <Text style={styles.content}>Teacher </Text>
                         <Text style={styles.content}>Teacher's mail </Text>
                     </View>
 
                     <View style={styles.container}>
                         <Text style={styles.content}> : </Text>
                         <Text style={styles.content}> : </Text>
                         <Text style={styles.content}> : </Text>
                     </View>
 
                     <View style={styles.container}>
                         <Text style={styles.content}> {props.class_name} </Text>
                         <Text style={styles.content}> {props.teacher_name} </Text>
                         <Text style={styles.linkcontent} onPress={() => Linking.openURL('mailto:' + props.teacher_mail + '?subject=Notice from Principal. ')}> {props.teacher_mail} </Text>  
                     </View>
 
             </View>
           </Card>
       </View>
        )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    innercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    titletext: {
      alignSelf: 'flex-start',
      fontSize: 20,
      height: 50,
    },
    content: {
        fontSize: 15,
    },
    linkcontent: {
        fontSize: 15,
        color: '#2e78b7'
    }
  });
