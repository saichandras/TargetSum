import React, {useContext} from 'react';
import {View, StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import {Context as GameContext} from "../context/GameContext";


const ButtonGroup = ({navigation}) => {
    const {generateGame} = useContext(GameContext)
    //Difficulty 6 - Easy, 9 - Medium, 12 - Hard

    const generateNewGame = (difficulty, color) => {
        generateGame(difficulty);
        navigation.navigate("Game", {
            count: difficulty,
            color: color
        });
    }

    return (
        <View>
            <Button
                titleStyle={styles.text}
                buttonStyle={{...styles.button, ...styles.easy}}
                title="Easy"
                onPress={() => {
                    generateNewGame(6, "#1687a7");
                }}
            />
            <Button
                titleStyle={styles.text}
                buttonStyle={{...styles.button, ...styles.medium}}
                title="Medium"
                onPress={() => {
                    generateNewGame(9,"#eb5e0b");
                }}
            />
            {/*<Button*/}
            {/*    titleStyle={styles.text}*/}
            {/*    buttonStyle={{...styles.button, ...styles.hard}}*/}
            {/*    title="Hard"*/}
            {/*    onPress={() => {*/}
            {/*        generateNumbers(12);*/}
            {/*    }}*/}
            {/*/>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginVertical: 15,
        marginHorizontal: 30,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    easy: {
        backgroundColor: "#1687a7"
    },
    medium: {
        backgroundColor: "#eb5e0b"
    },
    hard: {
        backgroundColor: "#e40017"
    }
});

export default ButtonGroup;