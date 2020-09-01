import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const ColorCounter = ({ color, number, onIncrease, onDecrease }) => {

  return (
    <View>
      <Text>{color} - {number}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => onIncrease()}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => onDecrease()}
      />
    </View>
  )
}

const styles = StyleSheet.create({});
export default ColorCounter;
