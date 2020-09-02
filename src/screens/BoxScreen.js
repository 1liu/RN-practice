import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box #1</Text>
      <Text style={styles.textStyle}>Box #2</Text>
      <Text style={styles.textStyle}>Box #3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center', //flex-start, flex-end, baseline, center, stretch:default
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    paddingVertical: 10,
    margin: 10,
    fontSize: 30,
    backgroundColor: 'rgba(100,100,100,0.2)'
  }
});
export default BoxScreen;
