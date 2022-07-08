import React from "react";
import {useEffect, useRef} from "react";

import classes from './Cell.module.scss';

function Cell({recolorClass, children}) {
    return <div className={`${classes.cell} ${classes[recolorClass]}`}>{children}</div>
}

function CellContainer({children}) {
    return (
        <div className={classes.field}>
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
        if (e.key >= 'a' && e.key <= 'z') {
            props.changeCell(e.key)
        }
    }
    return (
        <Cell>
            {props.focused
                ? <input
                    className={classes.cell_edit}
                    autoComplete="false"
                    onKeyPress={onKeyPress}
                    onKeyDown={keydownHandler}
                    maxLength={1}
                    ref={InputRef}
                    onChange={(e) => props.changeCell(e.target.value)}
                    value={props.input}
                />
                : <input
                    className={classes.cell_edit}
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