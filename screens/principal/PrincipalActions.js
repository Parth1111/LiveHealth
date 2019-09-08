import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ActListItem from '../../components/ActionListItem';

export default class PrincipalActions extends Component {
    render() {
        return (
            <View>
                <ActListItem icon={'md-people'} title={"View Classes"}/>
                <ActListItem icon={'md-person-add'} title={"Edit Teachers"}/>
            </View>
        )
    }
}
