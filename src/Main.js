import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './context/reducer';
import initialState from './context/store';
import {Component_A, Componenet_B} from './components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const store = createStore(reducer, initialState);
const Stack = createStackNavigator();
const Main = () => {
  console.log('renderMain');
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="A" component={Component_A} />
          <Stack.Screen name="B" component={Componenet_B} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Main;

const styles = StyleSheet.create({});
