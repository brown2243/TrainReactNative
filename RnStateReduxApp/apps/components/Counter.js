/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const Counter = ({index, value, handleIncrement, handleDecrement}) => {
    return (
        <View style={styles.outline}>
            <Text children={`Count : ${value.counterNum}`} />
            <View style={styles.counterButton}>
                <TouchableOpacity style={styles.button}
                    onPress={() => handleIncrement(index)}>
                    <Text children="+" style={styles.buttonText} />
                </TouchableOpacity>
                <Text children="   " />
                <TouchableOpacity style={styles.button}
                    onPress={() => handleDecrement(index)}>
                    <Text children="-" style={styles.buttonText} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outline: { alignItems: 'center', justifyContent: 'center'},
    counterButton: { flex: 1, flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' },
    button: { backgroundColor: '#d142ff', width: 40, justifyContent: 'center', alignItems: 'center', height: 40, borderRadius: 5 },
    buttonText: { color: 'white', fontWeight: 'bold', fontSize: 20},
});

// Counter.propTypes = {
//     index: PropTypes.number,
//     value: PropTypes.object,
//     handleIncrement: PropTypes.func,
//     handleDecrement: PropTypes.func,
// };

// Counter.defaulProps = {
//     index: 0,
//     value: { counterNum: 0 },
//     handleIncrement: () => console.warn('undefined handleIncrement'),
//     handleDecrement: () => console.warn('undefined handleDecrement'),
// };

export default Counter;
