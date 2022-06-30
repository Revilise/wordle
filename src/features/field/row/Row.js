import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentRowValue, refocusCell} from "../FieldReducer";

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
            case "Backspace":
                props.onChange("");
                if (props.focused_cell > 0) {
                    props.refocusCell(props.focused_cell - 1);
                }
                break;
            case "ArrowRight": if (props.focused_cell < 5) props.refocusCell(props.focused_cell + 1); break;
            case "ArrowLeft": if (props.focused_cell > 0) props.refocusCell(props.focused_cell - 1); break;
            default: break;

        }
    }

    return (
        <Cell>
            {props.focused
                ? <input className="cell-edit" autoComplete="false" onKeyDown={keydownHandler} ref={InputRef} onChange={(e) => props.onChange(e.target.value)} value={props.word} />
                : <input className="cell-edit" autoComplete="false" onClick={props.refocusCurrent} onChange={props.onChange} value={props.word} />}
        </Cell>
    )
}

const symbols_template = ",".repeat(4).split(',');

export function Row({correctness, disabled, input}) {

    const app = useSelector(state => state.app);
    const field = useSelector(state => state.field);

    const dispatch = useDispatch();

    function changeCell(value) {
        dispatch(changeCurrentRowValue(value[value.length - 1])); //
        if (field.focused_cell < 4 && value) dispatch(refocusCell(field.focused_cell + 1));
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
                                 focused_cell={field.focused_cell}
                                 refocusCurrent={() => dispatch(refocusCell(cell_idx))}
                                 refocusCell={(val) => dispatch(refocusCell(val))}
                                 onChange={changeCell}
                                 focused={cell_idx === field.focused_cell}
                                 word={field.row_values[cell_idx] || ""}   />
            })}
        </Container>
    )
}
