import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, Text, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home";
import Details from "./components/Details";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Image source={require("./assets/tenor.png")} />
      
   
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={Home} options={{ title: 'Details' }} />
        <Stack.Screen name="Details" component={Details}  options={{ title: 'Overview' }} />
      </Stack.Navigator>
    </NavigationContainer>


      <Button
        style={styles.buttonStyle}
        title="Buy Your Smile With One Dollar"
      ></Button>
      <StatusBar style="auto" />
      <Text style={styles.textStyle}>A Joke For Dollar</Text>
    </SafeAreaProvider>
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
