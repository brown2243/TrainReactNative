import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import CounterListContainer from './containers/CounterListContainer';

function App() {
  return (
    <ScrollView style={styles.appContainer}>
      <CounterListContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f6e1f4',
    paddingTop: '10%',
  },
});

export default App;
