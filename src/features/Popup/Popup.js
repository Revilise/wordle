import classes from './Popup.module.scss'

import closeLight from '../../assets/light-theme/close-light.svg';
import closeDark from '../../assets/dark-theme/close-dark.svg';
import {createRef, useEffect} from "react";

export function Popup({theme, onClick, content, title}) {
    const popup = createRef()
    const back = createRef()
    const wrapContent = createRef();

    useEffect(() => {
        for (let k in popup.current) {
            console.log(k, popup.current[k]);
        }
        // даю время стилям загрузиться.
        setTimeout(() => {
            back.current.style.opacity = 1;
            popup.current.style.height = wrapContent.current.scrollHeight + "px"
        }, 0)
        //eslint-disable-next-line
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
        </div>
    )
}