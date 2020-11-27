/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text children="Detail UI" style={styles.text} />
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
        color: '#ff0000',
    },
});

export default DetailScreen;
