import styled from 'styled-components';

const Div = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
`

export function Key({letter, key_state, handler}) {
    return (
        <Div onClick={handler} value={letter} className={`keyboard_key ${key_state}`}>{letter}</Div>
    )
}