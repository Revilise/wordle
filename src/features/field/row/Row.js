import styled from 'styled-components';
import { useRef } from 'react';
import React from 'react'
import background from '../../../assets/input-grid.svg'

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

function CellEdit({word, focused, handler, handlerChange}) {
    const InputRef = useRef(null)

    React.useEffect(() => {
        if (InputRef.current) InputRef.current.focus()
    })

    return (
        <Cell>
            {focused ? <Input ref={InputRef} onKeyDown={handler} onChange={handlerChange} value={word} /> : <Input disabled={true} value={word} />}
        </Cell>
    )
}

export function Row({value, handler, disabled, idx, cellRefocuseHandler}) {
    const [focused_cell, refocuseCell] = React.useState(0);
    const [row_value, changeChar] = React.useState([]);

    const symbols_template = ",".repeat(4).split(',');

    function CellKeyDown(e) {
        if (e.code === "Backspace") {
            if (focused_cell > 0) refocuseCell(focused_cell - 1);
        } else {
            if (focused_cell < 5) refocuseCell(focused_cell + 1);
        }
    }

    return (
        <Container>
            {symbols_template.map((el, idx) => {
                if (disabled) {
                    return (
                        <Cell key={idx}>
                            {value ? value[idx] : '' }
                        </Cell>
                    )
                }
                return <CellEdit key={idx} focused={focused_cell === idx} handler={CellKeyDown} word={value[idx]} />
            })}
        </Container>
    )
}