import {Key} from "./key/Key";

export default function KeyboardContainer(props) {

    return (
        <div className="keyboard">
            {props.keys.map((key, idx) =>
                <Key handler={props.KeyClickHandler}
                     key={idx} letter={key}
                     key_state={props.getKeyState(key)}/>)
            }
        </div>
    )
}