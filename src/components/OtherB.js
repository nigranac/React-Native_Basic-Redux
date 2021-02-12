import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
const OtherB = () => {
  const {counter} = useSelector((state) => state);
  return (
    <View>
      <Text style={{fontSize: 50}}>{counter}</Text>
    </View>
  );
};

export default OtherB;
