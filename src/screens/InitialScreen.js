import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, Image} from "react-native";
import {Text} from 'react-native-elements';
import ButtonGroup from "../components/ButtonGroup";
import {Context as GameContext} from "../context/GameContext";


const InitialScreen = ({navigation}) => {

    const {reset} = useContext(GameContext);

    useEffect(() => {
        navigation.addListener('focus', () => {
            reset();
        });
    },[navigation]);

    return(
        <View style={styles.rootContainer}>
            <Image source={require('../Images/sum1.png')} style={styles.image}/>
            <View style={styles.bottomContainer}>
                <Text h2 style={styles.heading}>Choose Your Difficulty</Text>
                <ButtonGroup navigation={navigation}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    heading:{
        alignSelf: 'center',
        marginBottom: 40
    },
    image:{
        width: 200,
        height: 200,
    },
    bottomContainer:{
        marginBottom: 40,
    }
});

export default InitialScreen;