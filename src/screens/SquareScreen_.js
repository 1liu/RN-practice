import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(Math.floor(Math.random() * 256));
  const [green, setGreen] = useState(Math.floor(Math.random() * 256));
  const [blue, setBlue] = useState(Math.floor(Math.random() * 256));

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
    }
  }

  return (
    <View>
      <ColorCounter
        color="Red"
        number={red}
        onIncrease={() => { setColor('red', INCREMENT) }}
        onDecrease={() => { setColor('red', -1 * INCREMENT) }}
      />
      <ColorCounter
        color="Green"
        number={green}
        onIncrease={() => { setColor('green', INCREMENT) }}
        onDecrease={() => { setColor('green', -1 * INCREMENT) }}
      />
      <ColorCounter
        color="Blue"
        number={blue}
        onIncrease={() => { setColor('blue', INCREMENT) }}
        onDecrease={() => { setColor('blue', -1 * INCREMENT) }}
      />
      <View style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  )
}

const sytles = StyleSheet.create({});
export default SquareScreen;
