import React from "react";
import {useEffect, useRef} from "react";

import './Cell.css'

function Cell({recolorClass, children}) {
    return <div className={`cell ${recolorClass || ""}`}>{children}</div>
}

function CellContainer({children}) {
    return (
        <div className="field">
            {children}
        </div>
    )
}

function CellEdit(props) {
    const InputRef = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            if (InputRef.current) InputRef.current.focus();
        }, 0)
    }, [props.cell])

    function keydownHandler(e) {
        switch (e.key) {
            case "Backspace": props.changeCell(""); break;
            case "ArrowRight": if (props.cell < 5) props.refocusCell(props.cell + 1); break;
            case "ArrowLeft": if (props.cell > 0) props.refocusCell(props.cell - 1); break;
            default: break;
        }
    }

    function onKeyPress(e) {
        props.changeCell(e.key)
    }
    return (
        <Cell>
            {props.focused
                ? <input
                    className="cell-edit"
                    autoComplete="false"
                    onKeyPress={onKeyPress}
                    onKeyDown={keydownHandler}
                    maxLength={1}
                    ref={InputRef}
                    onChange={(e) => props.changeCell(e.target.value)}
                    value={props.input}
                />
                : <input
                    className="cell-edit"
                    autoComplete="false"
                    maxLength={1}
                    onClick={() => props.refocusCell(props.idx)}
                    onChange={(e) => props.changeCell(e.target.value)}
                    value={props.input}
                />}
        </Cell>
    )
}

Cell.Edit = CellEdit;
Cell.Container = CellContainer;

export default Cell;