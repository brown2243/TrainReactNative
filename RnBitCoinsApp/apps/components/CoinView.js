/* eslint-disable no-alert */
import React, {Component} from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';
import axios from 'axios';

import CoinItem from './CoinItem';
import {getCoinIconUri} from '../data/constants';

const sampleData = [
  {
    circulating_supply: 185000,
    cmc_rank: 1,
    date_added: '2020-12-01T00:00:00.000Z',
    id: 1,
    last_updated: '2020-12-01T00:00:00.000Z',
    max_supply: 21000000,
    name: 'Bitcoin',
    num_market_pairs: 9550,
    platform: null,
    quote: [Object],
    slug: 'bitcoin',
    symbol: 'BTC',
    tags: [Array],
    total_supply: 185000,
  },
  {
    circulating_supply: 111111,
    cmc_rank: 2,
    date_added: '2020-12-01T00:00:00.000Z',
    id: 2,
    last_updated: '2020-12-01T00:00:00.000Z',
    max_supply: null,
    name: 'Ethereum',
    num_market_pairs: 5775,
    platform: null,
    quote: [Object],
    slug: 'ethereum',
    symbol: 'ETH',
    tags: [Array],
    total_supply: 111111,
  },
];

const client = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com',
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    'X-CMC_PRO_API_KEY': '2d4b7f4f-d98e-457f-962f-2b8340d60762',
  },
});

export default class CoinView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: [], // API 진짜데이터 배열
      isLoading: false,
    };
  }

  componentDidMount() {
    //this.getCoinData();
    // setInterval(() => {
    //   this.getCoinData();
    // }, 10000); // 10초마다 1000ms -> 1초, 10000 10초
  }

  getCoinData = async () => {
    this.setState({isLoading: true});

    try {
      await client
        .get('/v1/cryptocurrency/listings/latest', {
          params: {limit: 10},
        })
        .then((res) => {
          //console.log(res);
          console.log('API 조회완료');
          this.setState({
            coinData: res.data.data,
            isLoading: false,
          });
        })
        .catch((err) => {
          console.error('getCoinData() :', err);
          alert('API조회 오류발생,\n관리자문의요망');
        });
    } catch (error) {
      console.error('getCoinData() :', error);
      alert('API오류 발생,\n관리자문의요망');
    }
  };

  render() {
    let coinItems = this.state.coinData.map((item, index) => {
      const {cmc_rank, name, num_market_pairs, total_supply, symbol} = item; // item을 객체 재구성

      return (
        <CoinItem
          key={index}
          name={name}
          rank={cmc_rank}
          price={num_market_pairs}
          volumn={total_supply}
          symbol={symbol}
          iconUri={getCoinIconUri(name)}
        />
      );
    });

    return (
      <ScrollView>
        <Button title="재조회" onPress={this.getCoinData} />
        <View style={styles.container}>{coinItems}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
  },
});
