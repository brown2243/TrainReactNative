/* eslint-disable prettier/prettier */
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

@observer
class Counter extends Component {
    render() {
        return (
            <View style={styles.outline}>
                <Text children={`Count : ${0}`} />
                <View style={styles.counterButton}>
                    <TouchableOpacity style={styles.button}>
                        {/* onPress={() => handleIncrement(index)}> */}
                        <Text children="+" style={styles.buttonText} />
                    </TouchableOpacity>
                    <Text children="   " />
                    <TouchableOpacity style={styles.button}>
                        {/* onPress={() => handleDecrement(index)}> */}
                        <Text children="-" style={styles.buttonText} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outline: { alignItems: 'center', justifyContent: 'center' },
    counterButton: { flex: 1, flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' },
    button: { backgroundColor: '#d142ff', width: 40, justifyContent: 'center', alignItems: 'center', height: 40, borderRadius: 5 },
    buttonText: { color: 'white', fontWeight: 'bold', fontSize: 20 },
});

export default Counter;
