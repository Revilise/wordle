import React from 'react'
import styled from "styled-components";

import close from '../../assets/close.svg';
import './DialogWindow.css';
import {connect} from "react-redux";
import {showWindowActionCreator} from "./DialogWindowReducer";
import ControlButtons from "../controllButtons/ControlButtons";

const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`

class DialogWindow extends React.Component {
    render() {
        if (!this.props.open) {
            return  <></>
        }

        return (
            <div className="window-container">
                <div className="window">
                    <Close>
                        <input onClick={() => this.props.showWindow(false)} type="image" src={close}  alt=""/>
                    </Close>
                    <div>
                        <h2 className="window_title">{this.props.title}</h2>
                        {typeof this.props.content === 'function' ? this.props.content() : <p>{this.props.content}</p> }
                    </div>
                    { this.props.role === "end" ? <ControlButtons.Restart /> : "" }
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    const { open, title, content, role } = state.window;
    return {
        open, title, content, role
    }
}
function MapDispatchToProps(dispatch) {
    return {
        showWindow: (bool, title, content) => dispatch(showWindowActionCreator(bool, title, content)),
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(DialogWindow)