/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {View, StyleSheet} from "react-native";

import { Marker } from "react-native-maps";

export default class MyMarker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Marker
                    coordinate={this.props.location}
                    title={this.props.title}
                    image={require('../icons/pin.png')}
                />
            </View>
        );
    }
}