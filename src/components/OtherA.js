import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
const OtherA = () => {
  const myCounter = useSelector((can) => can.counter);
  return (
    <View>
      <Text style={{fontSize: 50}}>Counter:{myCounter}</Text>
    </View>
  );
};

export default OtherA;

const styles = StyleSheet.create({});
