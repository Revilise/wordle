import React from 'react'
import {PlaySound} from "../../../app/audioControl";

export function Cell({recolorClass, children}) {
    return <div className={`cell ${recolorClass}`}>{children}</div>
}
export function Container({children}) {
    return <div className="field">{children}</div>
}

function CellEdit(props) {
    const InputRef = React.useRef(null)

    React.useEffect(() => {
        setTimeout(() => {
            if (InputRef.current) InputRef.current.focus();
        }, 0)
    }, [props.focused_cell])

    function keydownHandler(e) {
        switch (e.key) {
            case "Backspace": if (props.focused_cell > 0 && props.word) {
                props.refocuseCell(props.focused_cell - 1);
            } break;
            case "ArrowRight": if (props.focused_cell < 5) props.refocuseCell(props.focused_cell + 1); break;
            case "ArrowLeft": if (props.focused_cell > 0) props.refocuseCell(props.focused_cell - 1); break;
            default: break;
        }
    }

    return (
        <Cell>
            {props.focused
                ? <input className="cell-edit" autoComplete="false" onKeyDown={keydownHandler} ref={InputRef} onChange={props.handler} value={props.word} />
                : <input className="cell-edit" autoComplete="false" onClick={props.refocuseCurrent} onChange={props.handler} value={props.word} />}
        </Cell>
    )
}

export function Row({input, difficulty, disabled, row_values, changeRowValues, focused_cell, refocuseCell, correctness, sound }) {

    const symbols_template = ",".repeat(4).split(',');

    function changeCell(e, idx) {
        if (sound) PlaySound();

        const val = e.target.value
        changeRowValues(val[val.length - 1], idx)
        if (focused_cell < 5 && val) refocuseCell(focused_cell + 1)
        if (focused_cell === 4) refocuseCell(focused_cell)
    }

    function recolor(letter) {
        if (letter) {
            const {allMatch = [], exists = [], noMatch = []} = correctness;
            switch (true) {
                case allMatch.includes(letter):
                    return "item-cell__all-matched";
                case exists.includes(letter):
                    return "item-cell__exists";
                case noMatch.includes(letter):
                    return "item-cell__no-match";
                default: return "item-cell";
            }
        }
        return ""
    }

    return (
        <Container>
            {symbols_template.map((el, cell_idx) => {
                if (disabled) {
                    return (
                        <Cell recolorClass={recolor(input[cell_idx])} key={cell_idx}>
                            {input ? input[cell_idx] : ""}
                        </Cell>
                    )
                }

                return <CellEdit key={cell_idx}
                                 focused_cell={focused_cell}
                                 refocuseCurrent={() => refocuseCell(cell_idx)}
                                 refocuseCell={refocuseCell}
                                 handler={(e) => changeCell(e, cell_idx)}
                                 focused={cell_idx === focused_cell}
                                 word={row_values[cell_idx] || ""}   />
            })}
        </Container>
    )
}
