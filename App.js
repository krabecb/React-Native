import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, Button } from 'react-native';

export default function App() {

  console.log("App executed")

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello world!</Text>
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image source={require('./assets/favicon.png')} />
      </TouchableOpacity>
      <Button title="Click me!" onPress={() => console.log("Button tapped")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
