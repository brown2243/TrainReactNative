/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class CoinItem extends Component {
  render() {
    let date = new Date();
    let now = date.toLocaleString();

    console.log(this.props.iconUri);

    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.props.iconUri}}
          style={styles.image} />
        <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <Text style={[styles.text, { flex: 1, fontSize: 20, marginTop: 5 }]}>{this.props.name || 'Name'}</Text>
            <Text style={[styles.text, { flex: 1, color: 'darkgrey' }]}>{'Volume: ' + (this.props.volume || 0)}</Text>
            <Text style={[styles.text, { flex: 1 }]}>{'$: ' + (this.props.price || 0)}</Text>
          </View>
          <Text style={[styles.text, { fontSize: 25, marginRight: 10 }]}>{'#' + (this.props.rank || 'Rank')}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row', // row
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'space-around', // center, space-around
    marginTop: 5,
    //marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  text: {
    color: 'black',
  },
  image: {
    width: 48,
    height: 48,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default CoinItem;
