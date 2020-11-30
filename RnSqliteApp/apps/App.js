import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import RegisterUser from './components/RegisterUser';
import ViewAllUsers from './components/ViewAllUsers';
import ViewUser from './components/ViewUser';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: '메인',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle: {
              backgroundColor: '#1877f2',
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterUser}
          options={{
            title: '사용자 등록',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle: {
              backgroundColor: '#1877f2',
            },
          }}
        />
        <Stack.Screen
          name="ViewAllUsers"
          component={ViewAllUsers}
          options={{
            title: '사용자 전체 조회',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle: {
              backgroundColor: '#1877f2',
            },
          }}
        />
        <Stack.Screen
          name="ViewUser"
          component={ViewUser}
          options={{
            title: '사용자 조회',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle: {
              backgroundColor: '#1877f2',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
