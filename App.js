import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './src/components/Game'; 
export default function App() {
  return (
    <View style={styles.container}>
      <Game randomNumbersCount={6}/>
      <StatusBar style="dark"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 50,
    backgroundColor: '#fff',
    
  },
});
