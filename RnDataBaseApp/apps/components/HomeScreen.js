/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

import MyButton from '../controls/MyButton';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <Text children="SQLite sample" />
                <MyButton
                    title="사용자 전체확인"
                    onButtonClick={function() {
                        alert("test");
                    }} />
                <Button title="사용자 선택" />
                <Button title="사용자 등록" />
                <Button title="사용자 수정" />
                <Button title="사용자 삭제" />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
