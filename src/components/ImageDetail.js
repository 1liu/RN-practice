import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ title, imageSrc, imageScore }) => {
  return (
    <View>
      <Image source={imageSrc} />
      <Text>{title}</Text>
      <Text>Image Score: {imageScore}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
});

export default ImageDetail;
