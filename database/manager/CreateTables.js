import React, { Component } from 'react'
import SQLite from 'react-native-sqlite-storage';
import { localDB } from '../../database/schema';

export default class CreateTables extends Component {  

    constructor(props) {
        super(props)
    }  
        
    
    componentDidMount() { 
       // const db = SQLite.openDatabase(localDB.dbName, '1.0', '', 1);
        var db = SQLite.openDatabase(localDB.dbName, "1.0", "reactDemo Database", 200000, this.openCB, this.errorCB);
        db.transaction(function (txn) {
            //txn.executeSql('DROP TABLE IF EXISTS ' + localDB.tableName.tblLogin, []);  
            txn.executeSql('CREATE TABLE IF NOT EXISTS ' + localDB.tableName.student + ' (id  INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,class TEXT,rollno INTEGER,student_mail TEXT,parent_mail TEXT,pass TEXT)', []);
            console.log('create databse successful.')
        });      
    }

    errorCB(err) {
        console.log("SQL Error: " + err);
      }
      
      successCB() {
        console.log("SQL executed fine");
      }
      
      openCB() {
        console.log("Database OPENED");
      }   

    render() {
        return null
      }  

}