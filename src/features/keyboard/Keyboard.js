import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import { changeRowValuesActionCreator, changeCurrentCellindexActionCreator } from '../field/FieldReducer'

import {Key} from "./key/Key";

const Div = styled.div`
  color: black;
  display: flex;
  align-content: center;
  flex-flow: row wrap;
  justify-content: center;
  width: 600px;
  margin: 0 auto;
  
  & > .keyboard_key {
    margin: 8px;  
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  & > .keyboard_key__green {
    background: var(--light-theme-green-key);
  }
  & > .keyboard_key__green:hover {
    background: var(--light-theme-green-key__hovered);
  }
  
  & > .keyboard_key__yellow {
    background: var(--light-theme-yellow-key);
  }
  & > .keyboard_key__yellow:hover {
    background: var(--light-theme-yellow-key__hovered);
  }
  
  & > .keyboard_key__gray {
    background: var(--light-theme-gray-key);
  }
  & > .keyboard_key__gray:hover {
    background: var(--light-theme-gray-key__hovered);
  }
  
  & > .keyboard_key__white {
    background: var(--light-theme-white-key);
  }
  & > .keyboard_key__white:hover {
    background: var(--light-theme-white-key__hovered);
  }
`


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
            <Div>
                {this.keys.map((key, idx) => <Key handler={this.KeyClickHandler.bind(this)} key={idx} letter={key} key_state={this.getKeyState(key)} />)}
            </Div>
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