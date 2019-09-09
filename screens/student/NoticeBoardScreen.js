import React, { Component } from 'react';
import { Text, View } from 'react-native';
import  NoticeItem  from '../../components/NoticeBoardItem';

export default class NoticeBoardScreen extends Component {
    render() {
        return (
            <View>
                <NoticeItem title={"Title 1"} content={"dfglkjfglk aslkjfahdl aslfkgjhsal asldkjfhsl asldkjah aslkjdfhasl asldkjfahdl asldkjahl aslkjdghzlkj asldjfhasdlkj a sejhsa lkj alskjdfslthu akjehawljhs ljh saelkjhsek tjh lkjhlwkrh."} date={"9/9/2019"}/>
                <NoticeItem title={"Title 2"} content={"dfglkjfglk aslkjfahdl aslfkgjhsal asldkjfhsl asldkjah aslkjdfhasl asldkjfahdl asldkjahl aslkjdghzlkj asldjfhasdlkj a sejhsa lkj alskjdfslthu akjehawljhs ljh saelkjhsek tjh lkjhlwkrh."} date={"9/9/2019"}/>
            </View>
        )
    }
}

