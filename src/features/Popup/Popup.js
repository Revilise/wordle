import classes from './Popup.module.scss'

import closeLight from '../../assets/light-theme/close-light.svg';
import closeDark from '../../assets/dark-theme/close-dark.svg';
import {createRef, useEffect} from "react";

export function Popup({theme, onClick, content, title}) {
    const popup = createRef()
    const back = createRef()

    useEffect(() => {
        // даю время стилям загрузиться.
        setTimeout(() => {
            back.current.style.opacity = 1;
            popup.current.style.height = popup.current.scrollHeight + "px"
        }, 0)
    },[])

    function ClosePopup() {
        back.current.style.opacity = 0;
        popup.current.style.height = "0";
        setTimeout(onClick, 200)
    }
    return (
        <div ref={back} className={classes.popup_back}>
            <div ref={popup} className={classes.popup}>
                <div className={classes.popup_close}>
                    <input onClick={ClosePopup} type="image"
                           src={theme === "theme__light" ? closeLight : closeDark} alt=""/>
                </div>
                <div className={classes.popup_content}>
                    <h2 className={classes.popup_title}>{title}</h2>
                    {content}
                </div>
            </div>
        </div>
    )
}