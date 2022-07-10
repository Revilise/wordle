import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import Keyboard from './Keyboard'
import "./Keyboard.css"
import {changeInput, refocusCell} from "../Game/GameReducer";

export default function KeyboardContainer({keyDownHandler}) {
    const {cell, match, vocab, theme} = useSelector(state => state.game)
    const dispatch = useDispatch();

    function getKeyState(key) {
        switch(true) {
            case match.full.includes(key):
                return "keyboard_key__green";
            case match.exists.includes(key):
                return "keyboard_key__yellow";
            case match.none.includes(key):
                return "keyboard_key__gray";
            default:
                return "keyboard_key__default"
        }
    }

    function KeyClickHandler(e) {
        const key = e.target.textContent
        dispatch(changeInput(key));
        if (cell < 4) dispatch(refocusCell(cell + 1));
        e.stopPropagation();
    }

    return <Keyboard keyDownHandler={keyDownHandler} theme={theme} keys={vocab} getKeyState={(v) => getKeyState(v)} KeyClickHandler={KeyClickHandler} />
}

