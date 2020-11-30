/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getCoinIconUri } from '../data/constants';
import axios from 'axios';

import CoinItem from './CoinItem';

const sampleData = [
    {
        "circulating_supply": 18556575,
        "cmc_rank": 1,
        "date_added": "2013-04-28T00:00:00.000Z",
        "id": 1,
        "last_updated": "2020-11-28T11:27:02.000Z",
        "max_supply": 21000000,
        "name": "Bitcoin",
        "num_market_pairs": 9550,
        "platform": null,
        "quote": [Object],
        "slug": "bitcoin",
        "symbol": "BTC",
        "tags": [Array],
        "total_supply": 18556575,
    },
    {
        "circulating_supply": 113610761.999,
        "cmc_rank": 2,
        "date_added": "2015-08-07T00:00:00.000Z",
        "id": 1027,
        "last_updated": "2020-11-28T11:27:02.000Z",
        "max_supply": null,
        "name": "Ethereum",
        "num_market_pairs": 5775,
        "platform": null,
        "quote": [Object],
        "slug": "ethereum",
        "symbol": "ETH",
        "tags": [Array],
        "total_supply": 113610761.999,
    },
    { "circulating_supply": 45348221180, "cmc_rank": 3, "date_added": "2013-08-04T00:00:00.000Z", "id": 52, "last_updated": "2020-11-28T11:28:02.000Z", "max_supply": 100000000000, "name": "XRP", "num_market_pairs": 671, "platform": null, "quote": [Object], "slug": "xrp", "symbol": "XRP", "tags": [Array], "total_supply": 99990853796 },
    { "circulating_supply": 19038287104.75833, "cmc_rank": 4, "date_added": "2015-02-25T00:00:00.000Z", "id": 825, "last_updated": "2020-11-28T11:27:07.000Z", "max_supply": null, "name": "Tether", "num_market_pairs": 9132, "platform": [Object], "quote": [Object], "slug": "tether", "symbol": "USDT", "tags": [Array], "total_supply": 19433536999.26306 },
    { "circulating_supply": 394509556.4344444, "cmc_rank": 5, "date_added": "2017-09-20T00:00:00.000Z", "id": 1975, "last_updated": "2020-11-28T11:27:09.000Z", "max_supply": null, "name": "Chainlink", "num_market_pairs": 402, "platform": [Object], "quote": [Object], "slug": "chainlink", "symbol": "LINK", "tags": [Array], "total_supply": 1000000000 },
    { "circulating_supply": 18584718.75, "cmc_rank": 6, "date_added": "2017-07-23T00:00:00.000Z", "id": 1831, "last_updated": "2020-11-28T11:27:06.000Z", "max_supply": 21000000, "name": "Bitcoin Cash", "num_market_pairs": 579, "platform": null, "quote": [Object], "slug": "bitcoin-cash", "symbol": "BCH", "tags": [Array], "total_supply": 18584718.75 },
    { "circulating_supply": 31112484646, "cmc_rank": 7, "date_added": "2017-10-01T00:00:00.000Z", "id": 2010, "last_updated": "2020-11-28T11:27:09.000Z", "max_supply": 45000000000, "name": "Cardano", "num_market_pairs": 212, "platform": null, "quote": [Object], "slug": "cardano", "symbol": "ADA", "tags": [Array], "total_supply": 45000000000 },
    { "circulating_supply": 65966851.59758905, "cmc_rank": 8, "date_added": "2013-04-28T00:00:00.000Z", "id": 2, "last_updated": "2020-11-28T11:28:02.000Z", "max_supply": 84000000, "name": "Litecoin", "num_market_pairs": 737, "platform": null, "quote": [Object], "slug": "litecoin", "symbol": "LTC", "tags": [Array], "total_supply": 65966851.59758905 },
    { "circulating_supply": 21662497475.556236, "cmc_rank": 9, "date_added": "2014-08-05T00:00:00.000Z", "id": 512, "last_updated": "2020-11-28T11:28:05.000Z", "max_supply": null, "name": "Stellar", "num_market_pairs": 324, "platform": null, "quote": [Object], "slug": "stellar", "symbol": "XLM", "tags": [Array], "total_supply": 50001803625.87172 },
    { "circulating_supply": 881419271.786317, "cmc_rank": 10, "date_added": "2020-08-19T00:00:00.000Z", "id": 6636, "last_updated": "2020-11-28T11:28:05.000Z", "max_supply": null, "name": "Polkadot", "num_market_pairs": 94, "platform": null, "quote": [Object], "slug": "polkadot-new", "symbol": "DOT", "tags": [Array], "total_supply": 1016224684.677815 }, 
];

const client = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com',
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        'X-CMC_PRO_API_KEY': '2d4b7f4f-d98e-457f-962f-2b8340d60762',
    },
});

class CoinView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinData: [],
            isLoading: false,
        };
    }

    componentDidMount() { // After component mounted
        //this._getCoinData();

        // setInterval(() => {
        //     this._getCoinData(10);
        //     console.log('toggled!');
        // }, 10000);
    }

    _getCoinData = async () => {
        this.setState({
            isLoading: true,
        });

        try {
            await client
                .get('/v1/cryptocurrency/listings/latest', {
                    params: { limit: 10 },
                })
                .then(res => {
                    //console.log(res.data.data);

                    const date = new Date();
                    const now = date.toLocaleString();
                    // if (this.props.refreshDate != null) {
                    //     this.props._setRefreshDate(now); // Run func type props
                    // }
                    var result = [];
                    this.setState({
                        coinData: res.data.data,
                        isLoading: false,
                    });
                })
                .catch(err => console.error(`error : ${err}`));
        } catch (error) {
            console.error('_getCoinData', error);
        }
    }

    render() {
        let detailCells = this.state.coinData.map((data, index) => {
            const { cmc_rank, name, num_market_pairs, total_supply, last_updated } = data; // Destructuring
            //console.log(data);
            return (
                <CoinItem
                    key={index}
                    rank={cmc_rank}
                    name={name}
                    price={num_market_pairs}
                    volume={total_supply}
                    iconUri={getCoinIconUri(name)}
                />
            );
        });

        return (
            <ScrollView>
                <Button title="refresh" onPress={this._getCoinData} />
                <View style={this.props.style}>
                    {detailCells}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
});

export default CoinView;
