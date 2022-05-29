import React from "react";
import './Theme.css'

export function Theme({theme, changeTheme}) {
    function handler() {
        theme === "light" ? changeTheme("dark") : changeTheme("light");
    }
    return (
        <div onClick={handler} className="toggle-btn">
            <input onChange={() => {}} checked={theme === "light"} className="toggle-btn_checkbox" type="checkbox" />
            <div className="toggle-btn_slider" />
        </div>
    )
}