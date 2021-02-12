import React from 'react';
import { useState,useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const App = () => {
  const[success,setSuccess]=useState(false)
  const animate=useRef(new Animated.Value(0)).current

  const handlePress=()=>{
    Animated.timing(animate, {
      toValue: 1,
      duration: 300,
      useNativeDriver:true
    }).start()
  }
  const handleSend=()=>{
    setSuccess(true)
      Animated.sequence([
        Animated.timing(animate, {
        toValue: 0,
        duration: 300,
        useNativeDriver:true
        
      }),
      Animated.delay(1500)
      ]).start(() => setSuccess(false))
    
  }

  const widthInterpolate = animate.interpolate({
    inputRange: [0, .5, 1],
    outputRange: [1, 1, 2],
    extrapolate: "clamp"
  });
  const heightInterpolate = animate.interpolate({
    inputRange: [0, .5, 1],
    outputRange: [1, 1, 1.1],
    extrapolate: "clamp"
  });
  const inputScaleInterpolate = animate.interpolate({
    inputRange: [0, .5, .6],
    outputRange: [0, 0, 1],
    extrapolate: "clamp"
  })
  const sendButtonInterpolate = animate.interpolate({
    inputRange: [0, .6, 1],
    outputRange: [0, 0,0.7]
  })
  const notifyTextScaleInterpolate = animate.interpolate({
    inputRange: [0, .5],
    outputRange: [1, 0],
    extrapolate: "clamp"
  })
  const thankyouScaleInterpolate = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  });
  const sendButtonStyle = {
    transform: [{
      scale: sendButtonInterpolate
    }]
  }
  const notifyTextStyle = {
    transform: [{
      scale: notifyTextScaleInterpolate
    }]
  }
  const inputWrapStyle = {
    transform: [{
      scaleX: inputScaleInterpolate
    }]
  }
  const buttonWrapStyle = {
    transform: [{
      scaleX: widthInterpolate,
      scaleY:heightInterpolate
    }]
  }
  const thankyouTextStyle = {
    transform: [{
      scale: thankyouScaleInterpolate,
    }]
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View style={[styles.buttonWrap,buttonWrapStyle]}>
          {!success && (
            <Animated.View
              style={[
                StyleSheet.absoluteFill,
                styles.inputWrap,
                inputWrapStyle
              ]}>
              <TextInput
                autoFocus
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor="rgba(255,123,115, 0.8)"
                style={styles.textInput}
              />
              <TouchableOpacity
                style={[styles.sendButton,sendButtonStyle]}
                onPress={handleSend}>
                <Text style={styles.sendText}>Send</Text>
              </TouchableOpacity>
            </Animated.View>
          )}

          {!success && (
            <Animated.View style={notifyTextStyle} >
              <Text style={styles.notifyText}>Notify Me</Text>
            </Animated.View>
          )}
          {success && (
            <Animated.View style={thankyouTextStyle} >
              <Text style={styles.notifyText}>Thank You</Text>
            </Animated.View>
          )}
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#673ab7"
  },
  buttonWrap: {
    backgroundColor: "#FFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  notifyText: {
    color: "#FF7B73",
    fontWeight: "bold"
  },
  inputWrap: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  textInput: {
    flex: 4,
  },
  sendButton: {
    backgroundColor: "#FF7B73",
    // flex: 1,
    borderRadius: 15,
padding:5,
    alignItems: "center",
    justifyContent: "center"
  },
  sendText: {
    color: "#FFF"
  }
});
