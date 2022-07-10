import {Row} from "./Row/Row";
import React from "react";

export default function Field({game, rows, keyDownHandler, recolor}) {
    return (
        <div className="rows-container" onKeyDown={keyDownHandler}>
            {rows.split('').map((row, idx) => (
                <Row key={idx}
                     recolor={recolor}
                     disabled={game.try !== idx}
                     row={idx}
                />
            ))
            }
        </div>
    )
}