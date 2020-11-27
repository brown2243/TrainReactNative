/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function SettingScreen({ navigation }) {
    return (
        <View style={styles.layoutStyle}>
            <View style={styles.buttonStyle}>
                {/* <Button
            title="설정화면 재진입"
            onPress={() => navigation.push('SETTING')}
          />
          <Button title="홈으로" onPress={() => navigation.navigate('HOME')} /> */}
                <Button title="뒤로" onPress={() => navigation.pop()} />
                <Button title="최초화면으로" onPress={() => navigation.popToTop()} />
            </View>
            <View style={styles.mainStyle}>
                <Text children="Setting UI Layout" />
            </View>x
        </View>
    );
}

const styles = StyleSheet.create({
    layoutStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },
    mainStyle: {
        backgroundColor: '#e9e9e9',
        flex: 1,
    },
});

export default SettingScreen;