import React from 'react';
import {StyleSheet, Text, TouchableOpacity}  from 'react-native';

export default RandomNumbers = ({ id, number, disabled, onSelected }) => {
    
    const handlePress = () => {

        console.log(number);
        onSelected(id);
           }
    
    return (
    <TouchableOpacity onPress={handlePress}>
<Text style={[styles.random, disabled && styles.disabled]}>{number}</Text>
    </TouchableOpacity>)
    
    };

const styles = StyleSheet.create({

    random:{
        backgroundColor: '#999',
        width: 100,
        minHeight: 45,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center',
    },
disabled:{
opacity: 0.3,

},

});
