import React, {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";

import {
    changeCurrentRowValue, refocusCell
} from '../field/FieldReducer'

import {Key} from "./key/Key";
import "./Keyboard.css"

export default function KeyboardConrainer() {
    const keyboard = useSelector(state => state.keyboard);
    const focused_cell = useSelector(state => state.field.focused_cell);
    const dispatch = useDispatch();

    let keys = "qwertyuiopasdfghjklzxcvbnm".split('');

    function getKeyState(key) {
        switch(true) {
            case keyboard.green_keys.includes(key):
                return "keyboard_key__green";
            case keyboard.yellow_keys.includes(key):
                return "keyboard_key__yellow";
            case keyboard.gray_keys.includes(key):
                return "keyboard_key__gray";
            default:
                return "keyboard_key__white"
        }
    }
    function KeyClickHandler(e) {
        const key = e.target.textContent
        dispatch(changeCurrentRowValue(key, focused_cell));
        if (focused_cell < 4) dispatch(refocusCell(focused_cell + 1));
        e.stopPropagation();
    }

    return <Keyboard
                keys={keys}
                getKeyState={(v) => getKeyState(v)}
                KeyClickHandler={KeyClickHandler} />
}

function Keyboard(props) {
    return (
        <div className="keyboard">
            {props.keys.map((key, idx) =>
                <Key handler={props.KeyClickHandler}
                     key={idx} letter={key}
                     key_state={props.getKeyState(key)}/>)
            }
        </div>
    )
}