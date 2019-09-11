import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import ActListItem from '../../components/ActionListItem';

export default class PrincipalActions extends Component {
    render() {
        return (
            <View>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('ViewClassesScreen')}}>
                    <ActListItem icon={'md-people'} title={"View Classes"}/>
                </TouchableOpacity>


            
            </View>
        )
    }
}
