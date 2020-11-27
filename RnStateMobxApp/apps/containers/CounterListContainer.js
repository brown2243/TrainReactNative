/* eslint-disable prettier/prettier */
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Counter from '../components/Counter';

import CounterStore from '../store/CounterStore';

@observer
class CounterListContainer extends Component {
    render() {
        return (
            <View>
                <View style={styles.counterButton}>
                    <Button title="카운터 추가"
                        onPress={CounterStore.handleAddCounter} />
                    <Text children="   " />
                    <Button title="카운터 삭제"
                        onPress={CounterStore.handleRemoveCounter} />
                </View>
                <View>
                    {CounterStore.counter.map((item, index) => (
                        <Counter key={index} index={index} value={item} />
                    ))}
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    scroll: { flex: 1, width: '100%', backgroundColor: '#a9a9a9', paddingTop: '10%' },
    counterButton: { flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' },
});

export default CounterListContainer;
