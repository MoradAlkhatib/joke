import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, Text, Button } from "react-native";
import {
  SafeAreaView,
  withSafeAreaInsets,
} from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("./assets/tenor.png")} />
      <Button
        style={styles.buttonStyle}
        title="Buy Your Smile With One Dollar"
      ></Button>
      <StatusBar style="auto" />
      <Text style={styles.textStyle}>A Joke For Dollar</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 20,
  },
  buttonStyle: {
    backgroundColor: "white",
  },
});
