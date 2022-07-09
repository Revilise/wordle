import WordleProcessor from "../../wordleProcessor/WordleProcessor";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showPopup} from "../Popup/PopupReducer";
import {changeInput, refocusCell, SaveCurrentRow} from "../Game/GameReducer";
import './Field.css'
import Field from "./Field";

export default function FieldContainer() {

    const game = useSelector(state => state.game);
    const dispatch = useDispatch();

    useEffect(() => {
        if (game.rows.length > 0) {
            const flag = game.rows[game.try - 1].split('').every(
                (cell, idx) => {
                    return !!game.match.full.find(obj => {
                        return obj.letter === cell && obj.col === idx
                    })
                }
            )
            if (flag) {
                dispatch(showPopup({title: "win", type: "win"}))
            }
            else if (!flag && game.try >= game.difficulty) {
                dispatch(showPopup({title: "defeat", type: "defeat"}))
            }
        }

    }, [game.try])

    function keyDownHandler(e) {
        if (e.key === 'Enter') return processInput();
        if (e.key === 'Backspace' && game.cell > 0) {
            dispatch(changeInput(""));
            dispatch(refocusCell(game.cell - 1));
            e.preventDefault();
        }
    }

    function processInput() {
        if (game.input.length > 0) {
            const value = game.input.join('').trim().toLowerCase();
            const isWordExists = WordleProcessor.CheckWordExistence(value);

            if (!isWordExists) {
                dispatch(showPopup({
                    title: "Bad word",
                    content: "Try another word."
                }))
                return;
            }

            if (game.input.length === game.width) {
                dispatch(SaveCurrentRow());
            }
        }
    }

    function recolor(letter, col) {
        if (letter) {
            const {full, exists, none} = game.match;
            const checkIsExists = (obj) => obj.letter === letter && obj.col === col;

            switch (true) {
                case full.some(checkIsExists):
                    return "cell__all_matched";
                case exists.some(checkIsExists):
                    return "cell__exists";
                case none.some(checkIsExists):
                    return "cell__no_match";
                default: throw new Error("alias letter was unexpected:" + letter);
            }
        }
    }

    const rows = " ".repeat(game.difficulty);
    return <Field recolor={recolor} rows={rows} game={game} keyDownHandler={keyDownHandler} processInput={processInput} />
}