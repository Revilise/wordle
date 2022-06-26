import React from 'react';
import {connect, useDispatch, useSelector} from "react-redux";

import {
    changeCurrentRowValue, refocusCell
} from '../field/FieldReducer'

import {Key} from "./key/Key";
import "./Keyboard.css"


export default function Keyboard() {

    const keys = "qwertyuiopasdfghjklzxcvbnm".split('');
    const keyboard = useSelector(state => state.keyboard);
    const focused_cell = useSelector(state => state.field.focused_cell);

    const dispatch = useDispatch();

    function getKeyState(key) {

        if (keyboard.green_keys.includes(key)) {
            return "keyboard_key__green";
        }

        if (keyboard.yellow_keys.includes(key)) {
            return "keyboard_key__yellow";
        }

        if (keyboard.gray_keys.includes(key)) {
            return "keyboard_key__gray";
        }

        return "keyboard_key__white";
    }

    function KeyClickHandler(e) {
        const key = e.target.textContent

        dispatch(changeCurrentRowValue(key, focused_cell));
        if (focused_cell < 4) dispatch(refocusCell(focused_cell + 1));

        e.stopPropagation();
    }

    return (
        <div className="keyboard">
            {keys.map((key, idx) =>
                <Key handler={KeyClickHandler}
                     key={idx} letter={key}
                     key_state={getKeyState(key)}/>)
            }
        </div>
    )
}