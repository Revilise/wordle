import styled from 'styled-components';

const Div = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
`

export function Key({letter, key_state}) {
    return (
        <Div value={letter} className={`keyboard_key ${key_state}`}>{letter}</Div>
    )
}