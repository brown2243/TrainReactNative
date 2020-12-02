/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { openDatabase } from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({ name: 'Users.db' });

const UpdateUser = ({ navigation }) => {
    let [userId, setInputUserId] = useState(''); // string
    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');

    let updateAllInfo = (name, contact, address) => {
        setUserName(name);
        setUserContact(contact);
        setUserAddress(address);
    };

    const searchUser = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM table_user WHERE user_id = ?',
                [userId],
                (txn, res) => {
                    console.log('record num :', res.rows.length);
                    console.log('record :', res.rows.item(0));
                    if (res.rows.length === 1) {
                        var tmp = res.rows.item(0);
                        //setUserData(res.rows.item(0));
                        updateAllInfo(tmp.user_name, tmp.user_contact, tmp.user_address);
                    } else {
                        alert("유저정보 없음");
                        //setUserData({});
                        updateAllInfo('', '', '');
                        setInputUserId('');
                    }
                }
            );
        });
    };

    const updateUser = () => {
        console.log(userId, userName, userContact, userAddress);
        // alert(`${userName}, ${userContact}, ${userAddress}`);
        if (userId.length === 0) {
            alert('유저번호를 입력하세요');
            return;
        }
        if (userName.length === 0) {
            alert('이름을 입력하세요');
            return;
        }
        if (userContact.length === 0) {
            alert('번호를 입력하세요');
            return;
        }
        if (userAddress.length === 0) {
            alert('주소를 입력하세요');
            return;
        }

        // DB처리
        db.transaction(function (txn) {
            txn.executeSql(
                `UPDATE table_user SET 
                    user_name = ?,
                    user_contact = ?,
                    user_address = ?
                  WHERE user_id = ?`,
                [userName, userContact, userAddress, userId],
                function (txn, res) {
                    console.log('res', res.rowsAffected);
                    if (res.rowsAffected > 0) {
                        Alert.alert(
                            '수정 성공',
                            '사용자 수정했습니다',
                            [
                                { text: 'OK', onPress: () => navigation.navigate('HomeScreen') },
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert('수정 실패!');
                    }
                }
            );
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <KeyboardAvoidingView>
                        <Text children="수정화면" style={{ textAlign: 'center', fontSize: 20 }} />
                        <TextInput placeholder="아이디 입력" style={styles.textInput}
                            value={userId}
                            onChangeText={(userId) => setInputUserId(userId)} />
                        <MyButton title="검색" onButtonClick={searchUser} />

                        <TextInput placeholder="이름입력"
                            value={userName}
                            onChangeText={(userName) => setUserName(userName)}
                            maxLength={20}
                            style={styles.textInput} />

                        <TextInput placeholder="핸드폰번호입력"
                            value={userContact}
                            onChangeText={(userContact) => setUserContact(userContact)}
                            maxLength={15}
                            keyboardType="numeric"
                            style={styles.textInput} />

                        <TextInput placeholder="주소입력"
                            value={userAddress}
                            onChangeText={(userAddress) => setUserAddress(userAddress)}
                            maxLength={50}
                            style={styles.textInput} />
                        <MyButton
                            title="저장"
                            onButtonClick={updateUser} />
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInput: { margin: 10, borderBottomColor: '#1877f2', borderBottomWidth: 1, fontSize: 20 },
});

export default UpdateUser;
