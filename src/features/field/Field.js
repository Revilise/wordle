import WordleProcessor from "../../wordleProcessor/WordleProcessor";
import React from 'react';

import End from "../../factory/PopupFactory/contentBoxes/End/End";
import {Row} from "./row/Row";
import './Field.css'
import {useDispatch, useSelector} from "react-redux";
import {showWindow} from "../dialogWindow/DialogWindowReducer";
import {
    changeInputValue,
    changeTryNumber,
    fillCorrectness,
    refocusCell,
    refocusRow,
    resetCurrentRow
} from "./FieldReducer";
import {changeKeyState} from "../keyboard/KeyboardReducer";

export default function Field() {

    const app = useSelector(state => state.app);
    const field = useSelector(state => state.field);
    const dispatch = useDispatch();

    function keyDownHandler(e) {
        if (e.key === 'Enter') return processInput();
    }

    function processInput() {
        const value = field.row_values.join('').trim();
        const isValueExists = WordleProcessor.CheckWordExistence(value);

        if (isValueExists && value.length === 5) {
            dispatch(changeInputValue(value));

            const correctness = WordleProcessor.CheckCorrectness(value);
            dispatch(fillCorrectness(correctness));
            dispatch(changeKeyState(correctness));

            if (field.focused_row < app.difficulty) {
                dispatch(refocusRow(field.focused_row + 1));
                dispatch(resetCurrentRow());
                dispatch(refocusCell(0));
                dispatch(changeTryNumber());
            }

            const cor_flag = correctness.every(el => el.position === "allMatch");

            if (field.try_number + 1 >= app.difficulty && !cor_flag) {
                dispatch(showWindow({
                    open: true,
                    title: "defeat :(",
                    type: "end"
                }))
            }

            if (cor_flag) {
                dispatch(changeTryNumber());
                dispatch(showWindow({
                    open: true,
                    title: "win :)",
                    type: "win"
                }))
            }
        } else {
            dispatch(showWindow({
                open: true,
                title: "bad word",
                content: "Try another word."
            }))
        }
    }

    const rows = " ".repeat(app.difficulty);
    return (
        <>
            <div className={`rows-container ${app.theme}-theme`} onKeyDown={keyDownHandler}>
                {rows.split('').map((row, idx) => (
                    <Row key={idx}
                         correctness={field.correctness[idx] || {}}
                         disabled={field.focused_row !== idx}
                         input={field.input[idx] || ""}/>))
                }
            </div>
            <div className={`control-btn`}>
                <button className="enter_btn" onClick={processInput.bind(this)}>enter</button>
            </div>
        </>
    )
}