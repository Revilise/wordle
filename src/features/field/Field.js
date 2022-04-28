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
    showWindowActionCreator
} from './FieldReducer'
import WordleProcessor from "../../wordleProcessor/WordleProcessor";
import DialogWindow from "../dialogWindow/DialogWindow";

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

        this.rows_length = 5; // will be from state
        this.rows = " ".repeat(this.rows_length).split('') // replace to rows from state
    }

    // button handler
    processInput() {
        // TODO: check try count

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
            }
        } else this.props.showWindow(true);
    };

    render() {
        return (
            <div>
                {  this.props.isWindowShowed ? (
                    <DialogWindow closeHandler={() => this.props.showWindow(false)}>
                        <DialogWindow.Title>Ops</DialogWindow.Title>
                        <p>bad word...</p>
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
        isWindowShowed: state.field.isWindowShowed,
        correctness: state.field.correctness_rows,
    }
}

function MapDispatchToProps(dispatch) {
    return {
        changeInput: (value, row) => dispatch(saveRowActionCreator(value, row)),
        changeRowValues: (value, row) => dispatch(changeRowValuesActionCreator(value, row)),
        saveRow: (value, row) => dispatch(saveRowActionCreator(value, row)),
        refocuseRow: (row) => dispatch(refocuseRowActionCreator(row)),
        clearCurrentRow: () => dispatch(clearCurrentRowActionCreator()),
        refocuseCell: (index) => dispatch(changeCurrentCellindexActionCreator(index)),
        showWindow: (value) => dispatch(showWindowActionCreator(value)),
        noteCorrectness: (array, index) => dispatch(noteCorrectnessActionCreator(array, index))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Field)