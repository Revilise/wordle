import {Key} from "./key/Key";
import {connect} from "react-redux";

import React from 'react';

class Keyboard extends React.Component {
    constructor() {
        super();
        this.keys = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    }

    getKeyState(key) {
        // switch (key) {
        //     case this.props.green_keys.include(key):
        //         return "keyboard_key__green";
        //     case this.props.yellow_keys.include(key):
        //         return  "keyboard_key__yellow";
        //     case this.props.gray_keys.include(key):
        //         return "keyboard_key__gray";
        //
        //     default: return "keyboard_key__white";
        // }
    }

    KeyClickHandler(e) {
        // e.target
    }

    render() {
        console.log(this.props)
        return (
            <div onClick={this.KeyClickHandler}>
                {this.keys.map(key => <Key letter={key} key_state={this.getKeyState(key)} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // green_keys: state.keyboard.green_keys,
    // yellow_keys: state.keys.yellow_keys,
    // gray_keys: state.keys.gray_keys
});

const mapDispatchToProps = (dispatch) => {
    // import here actions from slice
};

// connect to usual react-redux or use function instead of class;
export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);