import React from 'react'
import {  StyleSheet, Button,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Home({navigation}) {
    return (
        <SafeAreaView  style={styles.container}>
            <Button title='english'  style={styles.buttonStyle} onPress={()=> navigation.navigate('Details')}></Button>
            <Button title='عربي'  style={styles.buttonStyle} onPress={()=> navigation.navigate('Details')} ></Button>
        </SafeAreaView>
    )
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