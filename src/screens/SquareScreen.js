import React, { useReducer } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const INCREMENT = 10;

const SquareScreen = () => {
  const reducer = (state, action) => {
    switch (action.colorToChange) {
      case 'red':
        return state.red + action.amount > 255 || state.red + action.amount < 0
          ? state
          : { ...state, red: state.red + action.amount };
      case 'green':
        return state.green + action.amount > 255 || state.green + action.amount < 0
          ? state
          : { ...state, green: state.green + action.amount };
      case 'blue':
        return state.blue + action.amount > 255 || state.blue + action.amount < 0
          ? state
          : { ...state, blue: state.blue + action.amount };
      default:
    }
  }
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  //console.log(state);
  return (
    <View>
      <ColorCounter
        color="Red"
        number={red}
        onIncrease={() => dispatch({ colorToChange: 'red', amount: INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * INCREMENT })}
      />
      <ColorCounter
        color="Green"
        number={green}
        onIncrease={() => dispatch({ colorToChange: 'green', amount: INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        number={blue}
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * INCREMENT })}
      />
      <View style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  )
}

const sytles = StyleSheet.create({});
export default SquareScreen;
