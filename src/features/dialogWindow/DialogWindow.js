import React from 'react'
import styled from "styled-components";

import closeLight from '../../assets/close-light.svg';
import closeDark from '../../assets/close-dark.svg';

import './DialogWindow.css';
import {connect} from "react-redux";
import {showWindowActionCreator} from "./DialogWindowReducer";

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
            <div className={`window-container ${this.props.theme}-theme`}>
                <div className="window">
                    <Close>
                        <input onClick={() => this.props.showWindow(false)} type="image" src={this.props.theme === "light" ? closeLight : closeDark} alt=""/>
                    </Close>
                    <h2 className="window_title">{this.props.title}</h2>
                    {typeof this.props.content === 'function' ? this.props.content() : <p>{this.props.content}</p> }
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    const { open, title, content, role } = state.window;
    return {
        open, title, content, role,
        theme: state.app.theme
    }
}
function MapDispatchToProps(dispatch) {
    return {
        showWindow: (bool, title, content) => dispatch(showWindowActionCreator(bool, title, content)),
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(DialogWindow)