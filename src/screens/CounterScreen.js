import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, counter: state.counter + 1 }
      case 'DECREMENT':
        return state.counter > 0 ? { ...state, counter: state.counter - 1 } : state;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Text>Counter Scrren</Text>
      <Text>Current Counter: {counter}</Text>
      <Button title="Increase" onPress={() => dispatch({ type: 'INCREMENT' })} />
      <Button title="Decrease" onPress={() => dispatch({ type: 'DECREMENT' })} />
    </View>
  )

}

const styles = StyleSheet.create({});
export default CounterScreen;
