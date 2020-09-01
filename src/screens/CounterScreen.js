import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <View>
      <Text>Counter Scrren</Text>
      <Text>Current Counter: {counter}</Text>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={decrease} />
    </View>
  )

}

const styles = StyleSheet.create({});
export default CounterScreen;
