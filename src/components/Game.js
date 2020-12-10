import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import RandomNumbers from './RandomNumbers.js'; 


export default Game = ({randomNumbersCount}) => {
  
    const [ selectedNumbers, setSelectedNumbers] = useState([]);
    const [ randomNumbers, setRandomNumbers ] = useState([]);
    const [ target, setTarget ] = useState([]);

    useEffect(() => {

        const firtsRandomNumbers = Array.from({ length: randomNumbersCount })
    .map(() => 1 + Math.floor(Math.random() * 10));
    
    const firstTarget = firtsRandomNumbers.slice(0, randomNumbersCount-2)
    .reduce((accumulator, current)=>( accumulator+current ),0);
        setRandomNumbers(firtsRandomNumbers);
        setTarget(firstTarget);
    }, []);


const isNumberSelected = numberIndex => selectedNumbers.some( number => number === numberIndex);

const selectedNumber = number => {
    setSelectedNumbers([ ...selectedNumbers, number]);
};

    return(
        <View>
    <Text style={styles.target}>{target}</Text>
   <View style={styles.randomContainer}>
    {randomNumbers.map((randomNumber, index) => 
        <RandomNumbers 
        id={index}
        key={index}
        number={randomNumber} 
        disabled={isNumberSelected(index)}
        onSelected={selectedNumber}> </RandomNumbers>
    )}

   </View>

        </View>
    );


};

const styles = StyleSheet.create({

    target:{
        fontSize: 40,
        backgroundColor: '#aaa',
        textAlign: 'center',
    },
    randomContainer:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

    },
   

});