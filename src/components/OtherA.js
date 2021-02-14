import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {newCounter} from '../context/selector';

const OtherA = () => {
  const myCounter = useSelector(newCounter);
  return (
    <View>
      <Text style={{fontSize: 50}}>Counter:{myCounter}</Text>
    </View>
  );
};

export default OtherA;
