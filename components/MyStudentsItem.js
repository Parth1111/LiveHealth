import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Card } from 'react-native-elements';

export default function MyStudentsItem(props) {

    return (
      <View>
           <Card>
               <View style={{flexDirection: 'row'}}>
                    <View style={styles.container}>
                        <Text style={styles.content}>Name </Text>
                        <Text style={styles.content}>Attendance </Text>
                        <Text style={styles.content}>Student email </Text>
                        <Text style={styles.content}>Parent email </Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.content}> : </Text>
                        <Text style={styles.content}> : </Text>
                        <Text style={styles.content}> : </Text>
                        <Text style={styles.content}> : </Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.content}> {props.student_name} </Text>
                        <Text style={styles.content}> {props.student_attendance} </Text>
                        <Text style={styles.linkcontent} onPress={() => Linking.openURL('mailto:' + props.student_mail + '?subject=Regarding your present attendance.&body=This is to inform you that you currently have an attendance of ' + props.student_attendance + '%. Please attend the classes immediately else be ready to face further consequences.')}> {props.student_mail} </Text>
                        <Text style={styles.linkcontent} onPress={() => Linking.openURL('mailto:' + props.parent_mail + '?subject=Regarding your wards attendance.&body=This is to inform you that your ward ' + props.student_name + ' has an attendance of ' +  props.student_attendance + '%. Please contact me immediately to avoid any issues later.')}> {props.parent_mail} </Text>  
                    </View>

            </View>
          </Card>
      </View>
    );
  
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

