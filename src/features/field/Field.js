import React from 'react';
import {connect} from "react-redux";

import {Row} from "./row/Row";

import {inputChangeActionCreator} from './FieldReducer'

class Field extends React.Component {
    //current row=0 like initial
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
                {this.rows.map((row, idx) => <Row handler={this.props.changeInput} key={idx} value={this.props.input} />)}
                <button onClick={this.processInput}>enter</button>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        input: state.field.input,
    }
}

function MapDispatchToProps(dispatch) {
    return {
        changeInput: (e) => dispatch(inputChangeActionCreator(e.target.value)),
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Field)