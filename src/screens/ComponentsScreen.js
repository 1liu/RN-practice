import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { AuthSession } from 'expo';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: "center"
  },
  logo: {
    marginTop: 20,
    width: 300,
    height: 300,
  },
  textStyle: {
    fontSize: 20,
    color: 'rgb(234,111,222)'
  }
});

const ComponentsScreen = () => (
    < View style = { styles.container } >
      <Text style={styles.textStyle}>学习使我快乐</Text>

    <Image
      style={styles.logo}
      source={{
        uri: 'https://www.keaidian.com/uploads/allimg/190520/20224455_0.jpg',
      }}
    />
    </View >
)



export default ComponentsScreen;
