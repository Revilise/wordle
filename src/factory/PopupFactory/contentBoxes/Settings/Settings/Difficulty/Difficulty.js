import './Difficulty.css'

export function Difficulty({difficulty, handler}) {

    const Increment = () => {
        if (difficulty < 7) handler(difficulty + 1);
    }
    const Decrement = () => {
        if (difficulty > 1) handler(difficulty - 1);
    }

    return (
        <div className="toggle-difficulty">
            <input className="toggle-difficulty_btn side_left" onClick={Decrement} type="button" value="-"/>
            <label className="toggle-difficulty_label">{difficulty}</label>
            <input className="toggle-difficulty_btn side_right" onClick={Increment} type="button" value="+"/>
        </div>
    )
}