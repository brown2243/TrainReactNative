/* eslint-disable prettier/prettier */
import React, { Component } from "react";
// import Geolocation from "react-native-geolocation-service";
import Geolocation from 'react-native-geolocation-service';
import GetLocation from 'react-native-get-location';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { Platform, PermissionsAndroid, View, StyleSheet, Linking, Button } from "react-native";
import MyMarker from "./components/MyMarker";

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedLocation: {
                latitude: 35.155951,
                longitude: -121.059488,
                latitudeDelta: 0.0122,
                longitudeDelta: 0.0122,
            },
            markLocation: {
                latitude: 35.156021,
                longitude: 129.059480,
            },
        };
    }

    getMyLocation() {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                console.log(`current`);
                console.log(location);
                //alert(`${location.latitude}\n${location.longitude}`);
                var tmp = {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0122,
                    longitudeDelta: 0.0122,
                };
                this.setState({ focusedLocation: tmp });
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            });
    }

    componentDidMount() {
        console.log(`focused`);
        console.log(this.state.focusedLocation);

        //this.getMyLocation();
    }

    async requestPermission() {
        try {
            if (Platform.OS === 'ios') {
                return await Geolocation.requestAuthorization('always');
            }
            else if (Platform.OS === 'android') {
                return await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                );
            }
        } catch (e) {
            console.error(e);
        }
    }

    onMarkerClick = () => {
        Linking.openURL('http://www.busanit.ac.kr/m');
    };

    onMyPositonClick = () => {
        this.getMyLocation();
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    region={this.state.focusedLocation}
                    initialRegion={this.state.focusedLocation}
                    style={styles.map}>
                    <Marker
                        coordinate={this.state.markLocation}
                        title="부산인재개발원"
                        description="http://www.busanit.ac.kr/"
                        onCalloutPress={this.onMarkerClick}
                        image={require('./icons/pin.png')}
                    />
                    {
                        (this.state.focusedLocation.latitude) ? (
                            <MyMarker title="내위치" location={this.state.focusedLocation} />
                        ) : (
                            <View />
                        )
                    }
                </MapView>
                <Button title='현재위치' onPress={this.onMyPositonClick} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    map: {
        flex: 1,
        marginBottom: 10,
    },
});
