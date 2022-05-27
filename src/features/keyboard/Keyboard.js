import React from 'react';
import {connect} from "react-redux";

import { changeRowValuesActionCreator, changeCurrentCellindexActionCreator } from '../field/FieldReducer'

import {Key} from "./key/Key";
import "./Keyboard.css"

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.keys = "qwertyuiopasdfghjklzxcvbnm".split('');
    }

    getKeyState(key) {

        if (this.props.green_keys.includes(key)) {
            return "keyboard_key__green";
        }

        if ( this.props.yellow_keys.includes(key)) {
            return "keyboard_key__yellow";
        }

        if (this.props.gray_keys.includes(key)) {
            return "keyboard_key__gray";
        }

        return "keyboard_key__white";

    }

    KeyClickHandler(e) {
        const key = e.target.textContent;

        this.props.changeRowValues(key, this.props.focused_cell);
        if (this.props.focused_cell < 4) this.props.refocuseCell(this.props.focused_cell + 1);

        e.stopPropagation();
    }

    render() {
        return (
            <div className="keyboard">
                {this.keys.map((key, idx) => <Key handler={this.KeyClickHandler.bind(this)} key={idx} letter={key} key_state={this.getKeyState(key)} />)}
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        green_keys: state.keyboard.green_keys,
        yellow_keys: state.keyboard.yellow_keys,
        gray_keys: state.keyboard.gray_keys,
        focused_cell: state.field.focused_cell,
    }
}
function MapDispatchToProps(dispatch) {
    return {
        changeRowValues: (value, index) => dispatch(changeRowValuesActionCreator(value, index)),
        refocuseCell: (index) => dispatch(changeCurrentCellindexActionCreator(index))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Keyboard)