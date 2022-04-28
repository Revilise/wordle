import styled from "styled-components";
import close from '../../assets/close.svg'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(52, 52, 52, 0.19);
  left: 0;
  top: 0;
`
const Window = styled.div`
  width: 840px;
  margin: 20vh auto 0 auto;
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-sizing: border-box;
  color: var(--light-theme-text-color);
`
const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`
function DialogWindow({children, closeHandler}) {
    return (
        <Container>
            <Window>
                <Close>
                    <input onClick={closeHandler} type="image" src={close}  alt=""/>
                </Close>
                <div>
                    {children}
                </div>
            </Window>
        </Container>
    )
}

DialogWindow.Title = styled.h2`
  margin-bottom: 16px;
`

export default DialogWindow;