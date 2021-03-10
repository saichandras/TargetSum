import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import GameScreen from "./src/screens/GameScreen";
import InitialScreen from "./src/screens/InitialScreen";
import {Provider as GameProvider} from './src/context/GameContext';


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Initial"
                component={InitialScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Game"
                component={GameScreen}
            />
        </Stack.Navigator>
    );
}


export default function App() {
    return (
        <GameProvider>
            <NavigationContainer>
                <MyStack/>
            </NavigationContainer>
        </GameProvider>
    );
}
