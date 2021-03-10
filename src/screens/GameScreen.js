import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import Game from "../components/Game";
import {Context as GameContext} from "../context/GameContext";

const GameScreen = ({route, navigation}) => {
    const count = route.params.count
    const circleColor = route.params.color
    const {generateGame} = useContext(GameContext);
    const [gameId, setGameId] = useState(1);

    const resetGame = () => {
        generateGame(count);
        return setGameId(gameId + 1);
    };

    return (
        <SafeAreaView style={styles.rootContainer}>
            <Game
                key = {gameId}
                count = {count}
                circleColor = {circleColor}
                onPlayAgain = {resetGame}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    rootContainer:{
        marginTop: 30
    }
});

export default GameScreen;