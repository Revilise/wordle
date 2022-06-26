import React from "react";
import './Theme.css'

export function Theme({theme, handler}) {
    function onClick() {
        theme === "light" ? handler("dark") : handler("light");
    }
    return (
        <div onClick={onClick} className="toggle-theme-btn">
            <input onChange={() => {}} checked={theme === "light"} className="toggle-theme-btn_checkbox" type="checkbox" />
            <div className="toggle-theme-btn_slider" />
        </div>
    )
}