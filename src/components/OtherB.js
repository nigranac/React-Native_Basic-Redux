import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
const OtherB = () => {
  const {counter} = useSelector((state) => state);
  return (
    <View>
      <Text style={{fontSize: 50}}>{counter}</Text>
    </View>
  );
};

export default OtherB;

const styles = StyleSheet.create({});
