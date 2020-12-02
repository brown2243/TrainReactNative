/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, ScrollView, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { openDatabase } from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({ name: 'Users.db' });

const DeleteUser = ({ navigation }) => {
    let [userId, setInputUserId] = useState(''); // string

    const deleteUser = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'DELETE FROM table_user WHERE user_id = ?',
                [userId],
                (txn, res) => {
                    console.log('res :', res.rowsAffected);
                    if (res.rowsAffected > 0) {
                        Alert.alert(
                            '삭제 성공',
                            '사용자 삭제했습니다',
                            [
                                {text: 'OK', onPress: () => navigation.navigate('HomeScreen')},
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert("삭제 실패");
                    }
                }
            );
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text children="삭제화면" style={{ textAlign: 'center', fontSize: 20 }} />
                <TextInput placeholder="아이디 입력" style={styles.textInput}
                    onChangeText={(userId) => setInputUserId(userId)} />
                <MyButton title="삭제" onButtonClick={deleteUser} />
            </View>
            <MyButton title="메인으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInput: { margin: 10, borderBottomColor: '#1877f2', borderBottomWidth: 1, fontSize: 20 },
});

export default DeleteUser;