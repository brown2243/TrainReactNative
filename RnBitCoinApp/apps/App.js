import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import CoinView from './components/CoinView';
import TopBar from './components/TopBar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Show Me the Coin',
      refreshDate: '-',
    };
  }

  componentDidMount() {
    const date = new Date();
    const now = date.toLocaleString();
    this._setRefreshDate(now);
  }

  _setRefreshDate = (date) => {
    // Called from CoinView's prop
    console.log('Updated: ' + date);
    this.setState({
      refreshDate: date,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TopBar title={this.state.title} refreshDate={this.state.refreshDate} />
        <CoinView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
