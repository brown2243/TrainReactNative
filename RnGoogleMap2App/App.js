/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 35.156021,
        longitude: 129.059480,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
      },
      markers: [{
        latlng: { latitude: 35.156021, longitude: 129.059480 },
        title: '부산인재개발원',
        description: '부산직업전문학교/부산IT교육센터',
      }],
    };
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ padding: 8 }}>Busan IT Institute</Text>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          initialRegion={this.state.region}>
          <Marker
            coordinate={this.state.region}
            title="부산인재개발원"
            description="http://www.busanit.ac.kr/"
            onCalloutPress={this.clickCallout}
          />
          {this.state.markers.map((marker, index) => {
              return <Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                        key={index}
                        image={require('./icons/pin.png')}/>;
            })
          }
        </MapView>
      </View>
    );
  }

  clickCallout = () => {
    Linking.openURL('http://www.busanit.ac.kr/m');
  };
}
