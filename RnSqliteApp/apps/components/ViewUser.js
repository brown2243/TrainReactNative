/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { openDatabase } from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({ name: 'Users.db' });

const ViewUser = ({ navigation }) => {
    let [userId, setInputUserId] = useState(''); // string
    let [userData, setUserData] = useState({}); // object

    const searchUser = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM table_user WHERE user_id = ?',
                [userId],
                (txn, res) => {
                    console.log('record num :', res.rows.length);
                    if (res.rows.length === 1) {
                        setUserData(res.rows.item(0));
                    } else {
                        alert("유저정보 없음");
                        setUserData({});
                    }
                }
            );
        });
    };

    const userInfo = userData.user_id ? (
        <View style={{margin:10}}>
            <Text children={`아이디 : ${userData.user_id}`} />
            <Text children={`유저이름 : ${userData.user_name}`} />
            <Text children={`연락처 : ${userData.user_contact}`} />
            <Text children={`주소 : ${userData.user_address}`} />
        </View>
    ) : (
        <View />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text children="조회화면" style={{ textAlign: 'center', fontSize: 20 }} />
                <TextInput placeholder="아이디 입력" style={styles.textInput}
                    onChangeText={(userId) => setInputUserId(userId)} />
                <MyButton title="검색" onButtonClick={searchUser} />
                {userInfo}
            </View>
            <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInput: { margin: 10, borderBottomColor: '#1877f2', borderBottomWidth: 1, fontSize: 20 },
});

export default ViewUser;