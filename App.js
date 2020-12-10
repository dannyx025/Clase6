import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Game from './src/components/Game'; 

export default App = () => {
  
  const [ gameId, setGameId ] = useState(0);
  
  return (
    <View style={styles.container}>
      <Game key={gameId} randomNumbersCount={6} initialSeconds={10}/>
      <StatusBar style="dark"/>
      <Button  title="Play Again!" onPress={ () => setGameId(() => gameId + 1)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 50,
    backgroundColor: '#fff',
    
  },

});
