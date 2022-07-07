import './Popup.css'

import closeLight from '../../assets/icons/close-light.svg';
import closeDark from '../../assets/icons/close-dark.svg';

export function Popup({theme, onClick, content, title}) {
    return (
        <div className={`popup-container ${theme}-theme`}>
            <div className="popup">
                <div className="popup_close">
                    <input onClick={onClick} type="image"
                           src={theme === "light" ? closeLight : closeDark} alt=""/>
                </div>
                <h2 className="popup_title">{title}</h2>
                {content}
            </div>
        </div>
    )
}