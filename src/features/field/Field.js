import {Row} from "./Row/Row";
import classes from "./Field.module.scss";

export default function Field({game, rows, keyDownHandler, recolor}) {
    return (
        <div className={classes.container} onKeyDown={keyDownHandler}>
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