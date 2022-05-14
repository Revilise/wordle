import styled from "styled-components";
import close from '../../assets/close.9e523dd28931ef34f052429a96d99445.svg';
import './DialogWindow.css';

const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`
function DialogWindow({children, closeHandler}) {
    return (
        <div className="window-container">
            <div className="window">
                <Close>
                    <input onClick={closeHandler} type="image" src={close}  alt=""/>
                </Close>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

DialogWindow.Title = styled.h2`
  margin-bottom: 16px;
`

export default DialogWindow;