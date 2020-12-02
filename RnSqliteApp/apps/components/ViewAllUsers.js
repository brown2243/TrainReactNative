/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, ScrollView } from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({ name: 'Users.db' });

const ViewAllUsers = ({navigation}) => {
    let [listItems, setListItems] = useState([]);

    useEffect(() => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM table_user',
                [],
                (txn, res) => {
                    console.log('record num :', res.rows.length);
                    var temp = [];
                    for (let i = 0; i < res.rows.length; i++) {
                        temp.push(res.rows.item(i));
                    }
                    setListItems(temp);
                }
            );
        });
    }, []);

    const newListItems = listItems.map((item, index) =>
        <View key={index} style={{ borderBottomColor: '#0000ff', borderBottomWidth: 1 }}>
            <Text children={item.user_id} />
            <Text children={item.user_name} />
            <Text children={item.user_contact} />
            <Text children={item.user_address} />
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    {newListItems}
                </View>
                <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ViewAllUsers;
