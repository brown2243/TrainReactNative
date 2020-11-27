/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingScreen extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text children="Setting UI" style={styles.text} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a9a9a9',
    },
    text: {
        fontSize: 24,
        color: '#0000ff',
    },
});

export default SettingScreen;
