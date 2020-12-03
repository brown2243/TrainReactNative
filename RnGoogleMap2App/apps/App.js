/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
// import Geolocation from "react-native-geolocation-service";
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { Platform, PermissionsAndroid, View, Text } from "react-native";

async function requestPermission() {
  try {
    if (Platform.OS === "ios") {
      return await Geolocation.requestAuthorization("always");
    } else {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (e) {
    console.log(e);
  }
}

export default function App() {
  const [location, setLocation] = useState();
  useEffect(() => {
    requestPermission().then(result => {
      console.log({ result });
      if (result === "granted") {
        Geolocation.getCurrentPosition(
          pos => {
            setLocation(pos.coords);
          },
          error => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 3600,
            maximumAge: 3600,
          },
        );

        console.log(`POS: ${location.latitude}, ${location.longitude}`);
      }
    });
  }, []);

  if (!location) {
    return (
      <View>
        <Text children="GPS disabled" />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1, margin: 10 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude}}
            title="대우월드마크 대로"
            image={require('./icons/pin.png')}
          />
        </MapView>
      </View>
    );
  }
}
