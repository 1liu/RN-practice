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
{/*       <TouchableOpacity
        onPress={() => navigation.navigate("List")}
      >
        <Text>Go to List DEMO</Text>
      </TouchableOpacity> */}
      <Button
        title="Go to List DEMO"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image DEMO"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter DEMO"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color DEMO"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square DEMO"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  }
});

export default HomeScreen;
