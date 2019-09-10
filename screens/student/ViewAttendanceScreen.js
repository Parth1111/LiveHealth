import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Piechart from 'react-native-pie-chart';  
import Color from '../../constants/Colors'
import { SQLite } from 'expo-sqlite';
import { TouchableOpacity } from 'react-native-gesture-handler';

const db = SQLite.openDatabase('testDB.db');


export default class ViewAttendanceScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentData: '',
        };
      }


      componentDidMount(){
        db.transaction((tx) => {
            tx.executeSql('select * from student_test where student_email = ?;', [this.props.navigation.getParam('studentmail')], 
            (tx, results) => {
                console.log(JSON.stringify(results));
                var len = results.rows.length;
                if(len > 0){
                    this.setState({studentData: results.rows.item(0)});
                }else{
                    console.log('Cannot get student attendance.');
                }
            }),
            (tx, results) => {
                console.log('error');
            }
        });
      }




    render() {
        const sliceColor = [Color.livehealthGreen,'#FFEB3B']
        const chart_wh = 200
        const att = parseInt(this.state.studentData.attendance)
        const series = [60, 40]

        return (
            <View style={styles.container}>

            <View style={styles.piechart}>
                <Piechart
                chart_wh={chart_wh}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.45}
                coverFill={'#FFF'}/>
            </View>

            <TouchableOpacity onPress={() => {this.getRecord}}>
            <Text>{att}</Text>
            </TouchableOpacity>


            </View>
        )
    }
}
getRecord = () => {

}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#FFFFFF'
    },
    piechart: {
        alignItems: 'center',
        paddingTop: '20%'
    }
});
