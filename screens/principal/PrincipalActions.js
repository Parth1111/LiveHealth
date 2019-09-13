import React, { Component } from 'react'
import { Text, View, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native'
import Color from '../../constants/Colors'
import ActListItem from '../../components/ActionListItem';

export default class PrincipalActions extends Component {
    render() {
        const {navigation} = this.props;
        const principal_email = navigation.getParam('principal_email')
        return (
            <View>

                <Text style={styles.helloText}>Welcome,</Text>
                <Text style={styles.emailText}>{principal_email}</Text>
                

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('ViewClassesScreen')}}>
                    <ActListItem icon={'md-people'} title={"View Classes"}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this._logOutAsync()}}>
                    <ActListItem icon={'md-log-out'} title={"Log out"}/>
                </TouchableOpacity>

            </View>
        )
    }

    _logOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };
}


const styles = StyleSheet.create({
    helloText: {
      color: Color.livehealthGreen,
      fontSize: 20,
      fontStyle: 'italic',
      paddingLeft:20,
      paddingTop:20,
    },
    emailText: {
      color: Color.livehealthGreen, 
      fontSize: 15, 
      paddingLeft:20, 
      fontStyle: 'italic'
    }
  })
  
