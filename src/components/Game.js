import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default Game = ({randomNumbersCount}) => {
   // const target = 10 +  Math.floor(40 * Math.random());
    const randomNumbers = Array.from({ length: randomNumbersCount })
    .map(() => {
        return 1 + Math.floor(Math.random() * 9);
    });
    
    const target = randomNumbers.slice(0, randomNumbersCount-2)
    .reduce((accumulator, current)=>( accumulator+current),0);
    
    return(
        <View>
    <Text style={styles.target}>{target}</Text>
   
    {randomNumbers.map((randomNumber, index) => 
        <Text key={index}>{randomNumber}</Text>
    )}
        </View>
    );


};





const styles = StyleSheet.create({

    target:{
        fontSize: 40,
        backgroundColor: '#aaa',
        textAlign: 'center',
    },


});