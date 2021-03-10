import createDataContext from "./createDataContext";
import {generateRandomNumber, generateRandomNumbersArray, shuffle} from "../Helpers/HelperFunction"

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'generate_game':
            return {
                selectedNumberIds: [],
                randomNumbersArray: action.payload.targetArray,
                target: action.payload.targetNum
            }
        case 'reset':
            return {randomNumbersArray: [], target: 0, selectedNumberIds: []};
        case 'add_to_selected_number':
            return {...state, selectedNumberIds: [...state.selectedNumberIds, action.payload]}
        case 'generate_random_num':
            return {
                ...state,
                target: generateRandomNumber(action.payload, state.randomNumbersArray)
            }
        case 'generate_random_nums_array':
            return {
                ...state,
                randomNumbersArray: generateRandomNumbersArray(action.payload)
            }
        default:
            return state;
    }
};

//Difficulty 6 - Easy, 9 - Medium, 12 - Hard


const generateRNA = (dispatch) => (count) => {
    dispatch({type: 'generate_random_nums_array', payload: count});
};

const generateRN = (dispatch) => (count) => {
    dispatch({type: 'generate_random_num', payload: count});
};

const addSelectedNumberIds = (dispatch) => (num) => {
    dispatch({type: 'add_to_selected_number', payload: num});
};

const reset = (dispatch) => () => {
    dispatch({type: 'reset'});
};

const generateGame = (dispatch) => (count) => {
    const targetArray = generateRandomNumbersArray(count);
    const targetNum = generateRandomNumber(count, targetArray)
    dispatch ({type: "generate_game", payload: {targetArray, targetNum}})
}

export const {Context, Provider} = createDataContext(
    gameReducer,
    {generateRNA, generateRN, addSelectedNumberIds, reset, generateGame},
    {randomNumbersArray: [], target: 0, selectedNumberIds: []}
);