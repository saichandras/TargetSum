import React, {useEffect, useState, useContext, useRef} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from "react-native";
import {Button, Text as RNEText} from "react-native-elements";
import RandomNumber from "./RandomNumber";
import {Context as GameContext} from "../context/GameContext";
import CountDown from 'react-native-countdown-component';
import AwesomeAlert from "react-native-awesome-alerts";


function uniqueId(length = 16) {
    return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""))
}


const Game = ({circleColor, count, onPlayAgain}) => {
    const {state: {randomNumbersArray, target, selectedNumberIds}, addSelectedNumberIds, playAgain} = useContext(GameContext);
    const [status, setStatus] = useState("PLAYING");

    //console.log(randomNumbersArray, target, selectedNumberIds);
    console.log("render");

    // const resetGame = () => {
    //     playAgain(count);
    //     setStatus("PLAYING")
    // };

    useEffect(() => {
        let game_status = gameStatus();
        if (game_status !== "PLAYING") {
            setStatus(game_status);
        }
        return () => {game_status = ""}
    });

    const gameStatus = () => {
        const sumSelected = selectedNumberIds.reduce((acc, curr) => {
            return acc + randomNumbersArray[curr];
        }, 0);
        //console.log(sumSelected);
        if (sumSelected < target) {
            return "PLAYING";
        }
        if (sumSelected === target) {
            return "WON";
        }
        if (sumSelected > target) {
            return "LOST";
        }
    }

    const isNumberSelected = (numberIndex) => {
        return selectedNumberIds.indexOf(numberIndex) >= 0;
    };

    const selectNumber = (numberIndex) => {
        addSelectedNumberIds(numberIndex);
    };

    return (
        <SafeAreaView>
            <RNEText h2 style={[styles.target, styles[`STATUS_${status}`]]}>{target}</RNEText>
            <View style={styles.randomContainer}>
                {randomNumbersArray.map((num, index) =>
                    <RandomNumber
                        number={num}
                        index={index}
                        key={index}
                        circleColor = {circleColor}
                        isDisabled={
                            isNumberSelected(index) || status !== "PLAYING"
                        }
                        onClick={selectNumber}
                    />
                )}
            </View>
            {status === "PLAYING" ?
                <CountDown
                    running={status === "PLAYING"}
                    until={10}
                    timeToShow={['S']}
                    size={25}
                    style={styles.timer}
                    digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#845ec2'}}
                    digitTxtStyle={{color: '#845ec2'}}
                    timeLabelStyle={{color: 'black', fontWeight: 'bold'}}
                    onFinish={() => {
                        setStatus("LOST");
                    }}
                />
                : null
            }
            {status !== "PLAYING" ?
                <Button
                    titleStyle={styles.text}
                    title="Play Again"
                    onPress={onPlayAgain}
                    buttonStyle={[styles.playAgainButtonStyle,styles[`STATUS_${status}`]]}
                    raised={true}
                    containerStyle={styles.playAgainContainer}
                    size={30}
                />
                : null
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
    },
    target: {
        marginHorizontal: 35,
        textAlign: 'center',
        borderRadius: 5,
        height: 60,
        lineHeight: 60,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        color: 'white'
    },
    randomContainer: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 2,
        justifyContent: 'center'
    },
    STATUS_PLAYING: {
        backgroundColor: '#435560',
    },
    STATUS_WON: {
        backgroundColor: 'green',
    },
    STATUS_LOST: {
        backgroundColor: 'red',
    },
    timer: {
        marginTop: 20,
    },
    playAgainContainer: {
        marginTop: 30,
        marginHorizontal: 30,
    },
    playAgainButtonStyle:{
        height: 45
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Game;