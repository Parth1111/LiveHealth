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
                         <Text style={styles.content}>Attendance </Text>
                         <Text style={styles.content}>Teacher's mail </Text>
                     </View>
 
                     <View style={styles.container}>
                         <Text style={styles.content}> : </Text>
                         <Text style={styles.content}> : </Text>
                         <Text style={styles.content}> : </Text>
                         <Text style={styles.content}> : </Text>
                     </View>
 
                     <View style={styles.container}>
                         <Text style={styles.content}> {props.class_name} </Text>
                         <Text style={styles.content}> {props.teacher_name} </Text>
                         <Text style={styles.linkcontent}> {props.class_attendance} </Text>
                         <Text style={styles.linkcontent} onPress={() => Linking.openURL('mailto:' + props.teacher_mail + '?subject=Overall attendance of class ' + props.class_name + '. &body=This is to inform you that your class ' + props.class_name + ' has an average attendance of ' +  props.class_attendance + '%. Please ensure that students attend the lectures regulary.')}> {props.teacher_mail} </Text>  
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
