/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TopBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Left</Text>
                <View>
                    <Text children={this.props.title} style={styles.title} />
                    <Text style={{textAlign:'center'}}>{this.props.refreshDate || '-'}</Text>
                </View>
                <Text>Right</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row', // row
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: { fontSize: 20 },
});

export default TopBar;
