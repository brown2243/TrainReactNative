import React, {useEffect, useState} from 'react';
import {View, Text, Platform, PermissionsAndroid} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    } else if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (error) {
    console.error(`error message : ${error}`);
  }
}

export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    // 초기값
    var initVal = {latitude: 37.578046, longitude: 126.976889}; // 경복궁 위치값
    setLocation(initVal);

    Geolocation.getCurrentPosition(
      (pos) => {
        setLocation(pos.coords);
      },
      (error) => {
        console.error(`Position error : ${error}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 5000,
      },
    );
    console.log(`latitude : ${location.latitude}`);
    console.log(`longitude : ${location.longitude}`);
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
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="경복궁"
            description="조선왕조 왕의 거처"
            image={require('./images/pin.png')}
          />
        </MapView>
      </View>
    );
  }
}
