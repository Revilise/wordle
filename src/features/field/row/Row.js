import styled from 'styled-components';

const Input = styled.input`

`

export function Row({value, handler}) {
    return (
        <div>
            <Input onChange={handler} value={value} />
        </div>
    )
}