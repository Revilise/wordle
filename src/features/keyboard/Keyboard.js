import {Key} from "./key/Key";
import {connect} from "react-redux";

import React from 'react';

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.keys = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    }

    getKeyState(key) {
        switch (key) {
            case this.props.green_keys.includes(key):
                return "keyboard_key__green";
            case this.props.yellow_keys.includes(key):
                return "keyboard_key__yellow";
            case this.props.gray_keys.includes(key):
                return "keyboard_key__gray";

            default:
                return "keyboard_key__white";
        }
    }

    KeyClickHandler(e) {
        // e.target
    }

    render() {
        return (
            <div onClick={this.KeyClickHandler}>
                {this.keys.map((key, idx) => <Key key={idx} letter={key} key_state={this.getKeyState(key)} />)}
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        green_keys: state.keyboard.green_keys,
        yellow_keys: state.keyboard.yellow_keys,
        gray_keys: state.keyboard.gray_keys,
    }
}
function MapDispatchToProps(dispatch) {
    return {}
}

export default connect(MapStateToProps, MapDispatchToProps)(Keyboard)