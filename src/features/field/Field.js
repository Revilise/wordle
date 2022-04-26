import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import {Row} from "./row/Row";

import {saveRowActionCreator,
    changeRowValuesActionCreator,
    refocuseRowActionCreator,
    clearCurrentRowActionCreator,
    changeCurrentCellindexActionCreator,
    refocuseCellActionCreator} from './FieldReducer'

const RowsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Button = styled.button`
  padding: 16px 24px;
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

        // TODO: proccess the row
        const value = this.props.row_values.join('').trim();

        // TODO: save the row
        if (value.length === 5) {
            this.props.saveRow(value, this.props.focused_row);
            // TODO: refocuse next row
            if (this.props.focused_row < this.props.game_difficulty) {
                this.props.refocuseRow(this.props.focused_row + 1);
                // TODO: clear current row
                this.props.clearCurrentRow();
                this.props.refocuseCell(0);
            }
        }
    }

    render() {
        return (
            <div>
                <RowsContainer>
                    {this.rows.map((row, idx) => (
                        <Row handler={this.props.changeInput}
                             key={idx}
                             focused_cell={this.props.focused_cell}
                             refocuseCell={this.props.refocuseCell}
                             row_idx={idx}
                             row_values={this.props.row_values}
                             changeRowValues={this.props.changeRowValues}
                             disabled={this.props.focused_row !== idx}
                             input={this.props.input[idx] || ""}/>))
                    }
                </RowsContainer>
                <Button onClick={this.processInput.bind(this)}>enter</Button>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        input: state.field.input,
        focused_row: state.field.focused_row,
        focused_cell: state.field.focused_cell,
        row_values: state.field.row_values,
        game_difficulty: state.app.difficulty,
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
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Field)