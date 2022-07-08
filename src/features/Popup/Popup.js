import classes from './Popup.module.scss'

import closeLight from '../../assets/light-theme/close-light.svg';
import closeDark from '../../assets/dark-theme/close-dark.svg';

export function Popup({theme, onClick, content, title}) {
    return (
        <div className={classes.popup_container}>
            <div className={classes.popup}>
                <div className={classes.popup_close}>
                    <input onClick={onClick} type="image"
                           src={theme === "theme__light" ? closeLight : closeDark} alt=""/>
                </div>
                <h2 className={classes.popup_title}>{title}</h2>
                {content}
            </div>
        </div>
    )
}