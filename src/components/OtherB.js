import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {newCounter} from '../context/selector';
const OtherB = () => {
  const counter = useSelector(newCounter);
  return (
    <View>
      <Text style={{fontSize: 50}}>{counter}</Text>
    </View>
  );
};

export default OtherB;
