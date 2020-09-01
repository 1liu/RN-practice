import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {

  return (
    <View>
      <Text style={styles.textStyle}>Image Screen</Text>
      <ImageDetail
        title={"Beach"}
        imageSrc={require("../../assets/beach.jpg")}
        imageScore={90}
      />
      <ImageDetail
        title={"Forest"}
        imageSrc={require("../../assets/forest.jpg")}
        imageScore={80}
      />
      <ImageDetail
        title={"Mountain"}
        imageSrc={require("../../assets/mountain.jpg")}
        imageScore={70}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center"
  }
});

export default ImageScreen;
