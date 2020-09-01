import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        title="Go to Components DEMO"
        onPress={() => navigation.navigate("Components")}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("List")}
      >
        <Text>Go to List DEMO</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
