import classes from './Popup.module.scss'

import {createRef, useEffect} from "react";
import Close from "./Icons/Close";

export function Popup({theme, onClick, content, title}) {
    const popup = createRef()
    const back = createRef()
    const wrapContent = createRef();

    useEffect(() => {
        back.current.style.opacity = 1;
        setTimeout(() => {
            popup.current.style.height = wrapContent.current.scrollHeight + "px"
        }, 20)
    },[])

    function ClosePopup() {
        back.current.style.opacity = 0;
        popup.current.style.height = "0";
        setTimeout(onClick, 200)
    }

    return (
        <div ref={back} className={classes.popup_back}>
            <div ref={popup} className={classes.popup}>
                <div ref={wrapContent}>
                    <div onClick={ClosePopup} className={classes.popup_close}>
                        <Close theme={theme}/>
                    </div>
                    <div className={classes.popup_content}>
                        <h2 className={classes.popup_title}>{title}</h2>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}