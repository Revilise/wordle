import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import {Row} from "./row/Row";

import {inputChangeActionCreator,
    changeRowValuesActionCreator,
    refocuseCellActionCreator} from './FieldReducer'

const RowsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

class Field extends React.Component {
    constructor() {
        super();

        this.rows_length = 5; // will be from state
        this.rows = " ".repeat(this.rows_length).split('') // replace to rows from state
    }

    // button handler
    processInput() {
        // depends on row index
        // calls WordleProcessor
    }

    render() {
        return (
            <div>
                <RowsContainer>
                    { this.rows.map((row, idx) => (
                        <Row handler={this.props.changeInput}
                             key={idx}
                             row_idx={idx}
                             row_values={this.props.row_values}
                             changeRowValues={this.props.changeRowValues}
                             disabled={this.props.focused_row !== idx}
                             value={this.props.input["row_" + idx] || ""} />))
                    }
                </RowsContainer>
                <button onClick={this.processInput}>enter</button>
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
    }
}

function MapDispatchToProps(dispatch) {
    return {
        changeInput: (value, row) => dispatch(inputChangeActionCreator(value, row)),
        changeRowValues: (value, row) => dispatch(changeRowValuesActionCreator(value, row))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Field)