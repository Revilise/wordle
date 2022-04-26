import styled from 'styled-components';
import React from 'react'

const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 50px 50px 50px;
  grid-column-gap: 10px;
  padding: 5px;
  margin: auto;
`
const Cell = styled.div`
  font-size: 24px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  outline: grey 1px solid;
  box-sizing: border-box;
  border-radius: 4px;
`
const Input = styled.input`
  width: 100%;
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4px;
`

function CellEdit(props) {
    const InputRef = React.useRef(null)

    React.useEffect(() => {
        setTimeout(() => {
            if (InputRef.current) InputRef.current.focus();
        }, 0)
    }, [props.focused_cell, props.word])

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
            {props.focused ?
                <Input onKeyDown={keydownHandler} ref={InputRef} onChange={props.handler} value={props.word} /> :
                <Input onClick={props.refocuseCurrent} onChange={props.handler} value={props.word} />}
        </Cell>
    )
}

export function Row({input, handler, disabled, row_idx, row_values, changeRowValues, focused_cell, refocuseCell }) {

    const symbols_template = ",".repeat(4).split(',');

    function changeCell(e, idx) {
        const updated = row_values
        const val = e.target.value
        updated[idx] = val[val.length - 1]
        changeRowValues(updated)
        if (focused_cell < 5 && val) refocuseCell(focused_cell + 1)
        if (focused_cell === 4) refocuseCell(focused_cell)
    }

    return (
        <Container>
            {symbols_template.map((el, cell_idx) => {
                if (disabled) {
                    return (
                        <Cell key={cell_idx}>
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
