import React from 'react';
import {Text, View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import OtherB from './OtherB';
const Componenet_B = ({navigation}) => {
  const dispatch = useDispatch();

  console.log('renderB');

  return (
    <View style={{backgroundColor: '#bdbdbd', flex: 1}}>
      <Text>Componenet_B</Text>
      <OtherB />
      <Button title="Go to A" onPress={() => navigation.navigate('A')} />
      <Button title="Increase" onPress={() => dispatch({type: 'Increase'})} />
      <Button title="Decrease" onPress={() => dispatch({type: 'Decrease'})} />
    </View>
  );
};

export default Componenet_B;
