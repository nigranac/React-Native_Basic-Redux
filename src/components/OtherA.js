import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
const OtherA = () => {
  const myCounter = useSelector((can) => can.counter);
  return (
    <View>
      <Text style={{fontSize: 50}}>Counter:{myCounter}</Text>
    </View>
  );
};

export default OtherA;
