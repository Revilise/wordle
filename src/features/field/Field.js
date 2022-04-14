import React from 'react';
import {Row} from "./row/Row";

export default class Field extends React.Component {
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
        console.log(this.rows);
        return (
            <div>
                {this.rows.map(row => <Row />)}
                <button onClick={this.processInput}>enter</button>
            </div>
        )
    }
}