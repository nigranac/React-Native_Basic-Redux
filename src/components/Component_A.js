import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import OtherA from './OtherA';
const Component_A = ({navigation}) => {
  const dispatch = useDispatch();

  console.log('renderA');

  return (
    <View style={{backgroundColor: '#eceff1', flex: 1}}>
      <Text>Component_A</Text>
      <OtherA />
      <Button title="Go to B" onPress={() => navigation.navigate('B')} />
      <Button title="Increase" onPress={() => dispatch({type: 'Increase'})} />
      <Button title="Decrease" onPress={() => dispatch({type: 'Decrease'})} />
    </View>
  );
};

export default Component_A;
