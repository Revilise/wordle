import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import {Row} from "./row/Row";

import {
    saveRowActionCreator,
    changeRowValuesActionCreator,
    refocuseRowActionCreator,
    clearCurrentRowActionCreator,
    noteCorrectnessActionCreator,
    changeCurrentCellindexActionCreator,
    incrementTryNumberActionCreator,
    showWindowActionCreator, resetFieldActionCreator,
} from './FieldReducer'
import WordleProcessor from "../../wordleProcessor/WordleProcessor";
import DialogWindow from "../dialogWindow/DialogWindow";
import ControlButtons from "../controllButtons/ControlButtons";

const RowsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
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
    }

    processInput() {
        const value = this.props.row_values.join('').trim();
        const isValueExists = WordleProcessor.CheckWordExistence(value);

        if (isValueExists && value.length === 5) {
            this.props.saveRow(value, this.props.focused_row);

            const correctness = WordleProcessor.CheckCorrectness(value);
            this.props.noteCorrectness(correctness, this.props.focused_row);

            if (this.props.focused_row < this.props.game_difficulty) {
                this.props.refocuseRow(this.props.focused_row + 1);
                this.props.clearCurrentRow();
                this.props.refocuseCell(0);
                this.props.incrementTryNumber();
            }

           const cor_flag = correctness.every(el => el.position === "allMatch");

            if (this.props.try_number + 1 >= this.props.game_difficulty && !cor_flag) {
                this.props.showWindow(true, "defeat", `:( secret word: ${WordleProcessor.getSecret()}`);
            }

            if (cor_flag) {
                this.props.showWindow(true, "win", ":)")
            }
        } else {
            this.props.showWindow(true, "bad word", "Try another word.");
        }
    }

    render() {
        return (
            <div>
                {  this.props.window.open ? (
                    <DialogWindow closeHandler={() => this.props.showWindow(false)}>
                        <DialogWindow.Title>{this.props.window.title}</DialogWindow.Title>
                        <p>{this.props.window.content}</p>
                        { this.props.window.title==="defeat" ? <ControlButtons.Restart /> : "" }
                    </DialogWindow>
                ) : "" }
                <RowsContainer>
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
                </RowsContainer>
                <Button className="enter_btn" onClick={this.processInput.bind(this)}>enter</Button>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        game_difficulty: state.app.difficulty,
        input: state.field.input,
        focused_row: state.field.focused_row,
        focused_cell: state.field.focused_cell,
        row_values: state.field.row_values,
        window: state.field.window,
        correctness: state.field.correctness_rows,
        try_number: state.field.try_number,
    }
}

function MapDispatchToProps(dispatch) {
    return {
        changeRowValues: (value, row) => dispatch(changeRowValuesActionCreator(value, row)),
        saveRow: (value, row) => dispatch(saveRowActionCreator(value, row)),
        refocuseRow: (row) => dispatch(refocuseRowActionCreator(row)),
        clearCurrentRow: () => dispatch(clearCurrentRowActionCreator()),
        refocuseCell: (index) => dispatch(changeCurrentCellindexActionCreator(index)),
        showWindow: (bool, title, content) => dispatch(showWindowActionCreator(bool, title, content)),
        noteCorrectness: (array, index) => dispatch(noteCorrectnessActionCreator(array, index)),
        incrementTryNumber: () => dispatch(incrementTryNumberActionCreator()),
        resetField: () => dispatch(resetFieldActionCreator())
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Field)