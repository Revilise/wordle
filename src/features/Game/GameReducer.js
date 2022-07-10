import {createSlice} from "@reduxjs/toolkit";
import WordleProcessor from "../../wordleProcessor/WordleProcessor";

const initialState = {
    width: 5,
    difficulty: 5,
    theme: "theme__light",
    rows: [],
    match: {
        full: [], // {letter, col}
        exists: [],
        none: []
    },
    input: [],
    cell: 0,
    try: 0, // Row also

    maxDifficulty: 7,
    minDifficulty: 2,
    vocab: "qwertyuiopasdfghjklzxcvbnm".split('')
}

function fillMatch(state) {

    const word = state.input.join('');
    const correctness = WordleProcessor.CheckCorrectness(word); //[{ letter, position }]
    for (let i=0, length = correctness.length; i < length; i++) {
        const obj = correctness[i];
        const temp = {letter: obj.letter, col: i};

        switch (obj.position) {
            case "allMatch":
                state.match.full.push(temp);
                break;
            case "exists":
                state.match.exists.push(temp);
                break;
            case "noMatch":
                state.match.none.push(temp);
                break;
            default:
                throw new Error("unknown position name: " + obj.position);
        }
    }

    return state.match;
}

function getCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const Game = createSlice({
    name: "game",
    initialState: getCopy(initialState),
    reducers: {
        SaveCurrentRow(state) {
            state.match = fillMatch(state);
            for (let status in state.match) {
                state.match[status] = [...new Set( state.match[status])]
            }

            state.rows[state.try] = state.input.join('');
            state.input = [];
            state.cell = 0;
            state.try++;
        },
        refocusCell(state, action) {
            state.cell = action.payload;
        },
        changeInput(state, action) {
            state.input[state.cell] = action.payload;
        },
        changeDifficulty(state, action) {
            state.difficulty = action.payload;
        },
        changeTheme(state, action) {
            state.theme = action.payload;
        },
        resetGame(state) {
            const theme = state.theme;
            const difficulty = state.difficulty;

            const init = getCopy(initialState);
            for (let key in init) {
                state[key] = init[key];
            }

            state.theme = theme;
            state.difficulty = difficulty;
        }
    }
})

export const { SaveCurrentRow, changeTheme, resetGame, changeInput, refocusCell, changeDifficulty } = Game.actions;

export default Game.reducer;