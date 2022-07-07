import {Row} from "./Row/Row";
import React from "react";

export default function Field({game, rows, processInput, keyDownHandler, recolor}) {
    return (
        <>
            <div className={`rows-container ${game.theme}-theme`} onKeyDown={keyDownHandler}>
                {rows.split('').map((row, idx) => (
                    <Row key={idx}
                         recolor={recolor}
                         disabled={game.try !== idx}
                         row={idx}
                    />
                ))
                }
            </div>
            <div className={`control-btn`}>
                <button className="enter_btn" onClick={processInput}>enter</button>
            </div>
        </>
    )
}