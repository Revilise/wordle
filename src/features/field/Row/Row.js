import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import {changeInput, refocusCell} from "../../Game/GameReducer";
import Cell from "../Cell/Cell";

export function Row({disabled, recolor, row}) {
    const dispatch = useDispatch();
    const {cell, input, rows} = useSelector(state => state.game);
    const symbols_template = ",".repeat(4).split(',');

    function changeCell(value) {
        value = value.toLowerCase();

        dispatch(changeInput(value));
        if (cell < 4 && value) {
            dispatch(refocusCell(cell + 1));
        }
    }

    return (
        <Cell.Container>
            {symbols_template.map((el, idx) => {
                if (disabled) {
                    const cellValue = rows[row] ? rows[row][idx] : "";
                    return (
                        <Cell recolorClass={recolor(cellValue, idx)} key={idx}>
                            {rows[row] ? rows[row][idx] : ""}
                        </Cell>
                    )
                }
                return <Cell.Edit key={idx}
                                  idx={idx}
                                  cell={cell}
                                  refocusCell={(val) => dispatch(refocusCell(val))}
                                  changeCell={changeCell}
                                  focused={idx === cell}
                                  input={input[idx] || ""}/>
            })
            }
        </Cell.Container>
    )
}
