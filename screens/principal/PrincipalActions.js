import React, { Component } from 'react'
import { View, TouchableOpacity, AsyncStorage } from 'react-native'
import ActListItem from '../../components/ActionListItem';

export default class PrincipalActions extends Component {
    render() {
        return (
            <View>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('ViewClassesScreen')}}>
                    <ActListItem icon={'md-people'} title={"View Classes"}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this._logOutAsync()}}>
                    <ActListItem icon={'md-people'} title={"Log out"}/>
                </TouchableOpacity>

            </View>
        )
    }

    _logOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };
}
