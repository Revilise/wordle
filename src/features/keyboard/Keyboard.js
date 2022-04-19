import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";

import {Key} from "./key/Key";

const Container = styled.div`
  display: flex;
`

class Keyboard extends React.Component {
    constructor() {
        super();
        this.keys = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    }

    getKeyState(key) {
        switch (key) {
            case this.props.green_keys.includes(key):
                return "keyboard_key__green";
            case this.props.yellow_keys.includes(key):
                return  "keyboard_key__yellow";
            case this.props.gray_keys.includes(key):
                return "keyboard_key__gray";

            default: return "keyboard_key__white";
        }
    }

    KeyClickHandler(e) {
        // e.target
    }

    render() {
        return (
            <Container onClick={this.KeyClickHandler}>
                {this.keys.map((key, idx) => <Key key={idx} letter={key} key_state={this.getKeyState(key)} />)}
            </Container>
        )
    }
}

// connect Keyboard to the store
export default function KeyboardAPI() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.keyboard)
    return <Keyboard dispatch={dispatch} {... state}  />
}