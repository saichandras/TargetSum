import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ToastAndroid, Platform, Alert} from 'react-native';

const RandomNumber = ({number, index, isDisabled, onClick, circleColor}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                if(isDisabled){
                    const msg = "Already Selected"
                    if(Platform.OS === 'android'){
                        ToastAndroid.show(msg,ToastAndroid.SHORT)
                    }else{
                        Alert.alert(msg);
                    }
                    return;
                }
                onClick(index);
            }}
        >
            <Text style={[styles.random, isDisabled && styles.selected, {backgroundColor: circleColor}]}>{number}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    random: {
        width: 85,
        height: 85,
        borderRadius: 85 / 2,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: 35,
        textAlign: 'center',
        lineHeight: 85,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        color: 'white'
    },
    selected: {
        opacity: 0.3
    }
});

export default RandomNumber;