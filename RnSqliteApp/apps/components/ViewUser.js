/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { openDatabase } from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({ name: 'Users.db' });

const ViewUser = ({ navigation }) => {
    // let [listItems, setListItems] = useState([]);

    // useEffect(() => {
    //     db.transaction((txn) => {
    //         txn.executeSql(
    //             'SELECT * FROM table_user',
    //             [],
    //             (txn, res) => {
    //                 console.log('record num :', res.rows.length);
    //                 var temp = [];
    //                 for (let i = 0; i < res.rows.length; i++) {
    //                     temp.push(res.rows.item(i));
    //                 }
    //                 setListItems(temp);
    //             }
    //         );
    //     });
    // }, []); // 재확인...

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <TextInput placeholder="아이디 입력" style={styles.textInput} />
                <MyButton title="검색" onButtonClick="" />
                <View>
                    <Text children="user_id" />
                    <Text children="item.user_name" />
                    <Text children="item.user_contact" />
                    <Text children="item.user_address" />
                </View>
            </View>
            <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInput: { margin: 10, borderBottomColor: '#1877f2', borderBottomWidth: 1, fontSize: 20 },
});

export default ViewUser;