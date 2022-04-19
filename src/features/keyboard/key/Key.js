import styled from 'styled-components'

const Div = styled.div`
  width: 49px;
  height: 49px;
  text-align: center;
  display: flex;
  align-self: center;
  background: #c9c2c2;
`

export function Key({letter, key_state}) {
    return <Div> {letter} </Div>
}