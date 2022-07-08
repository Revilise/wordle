import React from "react";
import './Theme.css'

export function Theme({theme, handler}) {
    function onClick() {
        theme === "theme__light" ? handler("theme__dark") : handler("theme__light");
    }
    return (
        <div onClick={onClick} className="toggle-theme-btn">
            <input onChange={() => {}} checked={theme === "theme__light"} className="toggle-theme-btn_checkbox" type="checkbox" />
            <div className="toggle-theme-btn_slider" />
        </div>
    )
}