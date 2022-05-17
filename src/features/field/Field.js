import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';
import './Field.css'

import {Row} from "./row/Row";

import {
    saveRowActionCreator,
    changeRowValuesActionCreator,
    refocuseRowActionCreator,
    clearCurrentRowActionCreator,
    noteCorrectnessActionCreator,
    changeCurrentCellindexActionCreator,
    incrementTryNumberActionCreator, resetFieldActionCreator,
} from './FieldReducer'
import WordleProcessor from "../../wordleProcessor/WordleProcessor";
import {showWindowActionCreator} from "../dialogWindow/DialogWindowReducer";
import {keysChangeStateActionCreator} from "../keyboard/KeyboardReducer";

const Button = styled.button`
  padding: 16px 24px;
  border: none;
  font-family: "Roboto Light";
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background: #e5e0e0;
  }
`

class Field extends React.Component {
    constructor(props) {
        super(props);

        this.rows = " ".repeat(this.props.game_difficulty).split('') // replace to rows from state
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.processInput = this.processInput.bind(this);
    }

    keyDownHandler(e) {
        if (e.key === 'Enter') return this.processInput();
    }
    processInput() {
        const value = this.props.row_values.join('').trim();
        const isValueExists = WordleProcessor.CheckWordExistence(value);

        if (isValueExists && value.length === 5) {
            this.props.saveRow(value, this.props.focused_row);

            const correctness = WordleProcessor.CheckCorrectness(value);
            this.props.noteCorrectness(correctness, this.props.focused_row);
            this.props.keysChangeState(correctness);

            if (this.props.focused_row < this.props.game_difficulty) {
                this.props.refocuseRow(this.props.focused_row + 1);
                this.props.clearCurrentRow();
                this.props.refocuseCell(0);
                this.props.incrementTryNumber();
            }

           const cor_flag = correctness.every(el => el.position === "allMatch");

            if (this.props.try_number + 1 >= this.props.game_difficulty && !cor_flag) {
                this.props.showWindow({
                    open: true,
                    title: "defeat :(",
                    content: `secret word: ${WordleProcessor.getSecret()}`,
                    role: "end"
                });
            }

            if (cor_flag) {
                this.props.showWindow({
                    open: true,
                    title: "win :)",
                    content: "Try again?",
                    role: "end"
                })
            }
        } else {
            this.props.showWindow({
                open: true,
                title: "bad word",
                content: "Try another word."
            })}
    }

    render() {
        return (
            <>
                <div className="rows-container" onKeyDown={this.keyDownHandler}>
                    {this.rows.map((row, idx) => (
                        <Row key={idx}
                             correctness={this.props.correctness[idx] || {} }
                             focused_cell={this.props.focused_cell}
                             refocuseCell={this.props.refocuseCell}
                             row_values={this.props.row_values}
                             changeRowValues={this.props.changeRowValues}
                             disabled={this.props.focused_row !== idx}
                             input={this.props.input[idx] || ""}/>))
                    }
                </div>
                <Button className="enter_btn" onClick={this.processInput.bind(this)}>enter</Button>
            </>
        )
    }
}

function MapStateToProps(state) {
    const { input, focused_row, focused_cell, row_values, correctness, try_number } = state.field;
    return {
        game_difficulty: state.app.difficulty,
        input, focused_row, focused_cell, row_values, correctness, try_number
    }
}

function MapDispatchToProps(dispatch) {
    return {
        changeRowValues: (value, row) => dispatch(changeRowValuesActionCreator(value, row)),
        saveRow: (value, row) => dispatch(saveRowActionCreator(value, row)),
        refocuseRow: (row) => dispatch(refocuseRowActionCreator(row)),
        clearCurrentRow: () => dispatch(clearCurrentRowActionCreator()),
        refocuseCell: (index) => dispatch(changeCurrentCellindexActionCreator(index)),
        showWindow: (obj) => dispatch(showWindowActionCreator(obj)),
        noteCorrectness: (array, index) => dispatch(noteCorrectnessActionCreator(array, index)),
        incrementTryNumber: () => dispatch(incrementTryNumberActionCreator()),
        resetField: () => dispatch(resetFieldActionCreator()),
        keysChangeState: (correctness) => dispatch(keysChangeStateActionCreator(correctness))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Field)