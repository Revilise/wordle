
export function Key({letter, key_state, handler}) {
    return (
        <div onClick={handler} className={`keyboard_key ${key_state}`}>{letter}</div>
    )
}