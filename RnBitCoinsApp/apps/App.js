import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CoinView from './components/CoinView';
import TopBar from './components/TopBar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '실시간 비트코인 정보',
      refreshDate: '-',
    };
  }

  componentDidMount() {
    const now = new Date().toLocaleString();
    this.setState({refreshDate: now});
  }

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
    backgroundColor: '#e9e9e9',
  },
});
