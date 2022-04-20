import styled from 'styled-components';
import { useRef } from 'react';
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

function CellEdit({word, focused, onChangeHandler, refocuseCell, focused_cell}) {
    const InputRef = useRef(null)

    React.useEffect(() => {
        setTimeout(() => {
            if (InputRef.current) {
                InputRef.current.focus();
                InputRef.current.select();
            }
        })
    })

    function keyDownHandler(e) {
        if (e.key === "Backspace") {
            if (focused_cell => 0) {
                refocuseCell(focused_cell - 1)
            }
        }
    }
    return (
        <Cell>
            {focused ? <Input ref={InputRef} onKeyDown={keyDownHandler} onChange={onChangeHandler} value={word} /> : <Input onChange={onChangeHandler} value={word} />}
        </Cell>
    )
}

export function Row({value, handler, disabled, row_idx}) {
    const [focused_cell, refocuseCell] = React.useState(0);

    const symbols_template = ",".repeat(4).split(',');

    function CellValueChange(e, idx) {
        let str = value.split('');
        str[focused_cell] = e.target.value;
        if (focused_cell < 5) refocuseCell(focused_cell + 1);
        handler(str.join(''), row_idx)
    }
    return (
        <Container>
            {symbols_template.map((el, cell_idx) => {
                if (disabled) {
                    return (
                        <Cell key={cell_idx}>
                            {value ? value[cell_idx] : '' }
                        </Cell>
                    )
                }
                return <CellEdit key={cell_idx}
                                 refocuseCell={refocuseCell}
                                 focused_cell={focused_cell}
                                 focused={focused_cell === cell_idx}
                                 onChangeHandler={(e) => CellValueChange(e, cell_idx)}
                                 word={value[cell_idx] || ""} />
            })}
        </Container>
    )
}