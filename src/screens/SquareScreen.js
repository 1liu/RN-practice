import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(Math.floor(Math.random() * 256));
  const [green, setGreen] = useState(Math.floor(Math.random() * 256));
  const [blue, setBlue] = useState(Math.floor(Math.random() * 256));
  return (
    <View>
      <ColorCounter
        color="Red"
        number={red}
        onIncrease={() => { if (red < 255) setRed(red + 1) }}
        onDecrease={() => { if (red > 0) setRed(red - 1) }}
      />
      <ColorCounter
        color="Green"
        number={green}
        onIncrease={() => { if (green < 255) setGreen(green + 1) }}
        onDecrease={() => { if (green > 0) setGreen(green - 1) }}
      />
      <ColorCounter
        color="Blue"
        number={blue}
        onIncrease={() => { if (blue < 255) setBlue(blue + 1) }}
        onDecrease={() => { if (blue > 0) setBlue(blue - 1) }}
      />
      <View style={{height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  )
}

const sytles = StyleSheet.create({});
export default SquareScreen;
