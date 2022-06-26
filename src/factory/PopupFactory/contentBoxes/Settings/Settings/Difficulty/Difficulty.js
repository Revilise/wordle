import './Difficulty.css'

export function Difficulty({theme, difficulty, handler}) {

    const Increment = () => {
        if (difficulty < 5) handler(difficulty + 1);
    }
    const Decrement = () => {
        if (difficulty > 1) handler(difficulty - 1);
    }
    function getDifficultyName() {
        // eslint-disable-next-line default-case
        switch (difficulty) {
            case 1: return "harder than hard";
            case 2: return "hard";
            case 3: return "medium";
            case 4: return "easy";
            case 5: return "easier than easy";
        }
    }
    return (
        <div className={`toggle-difficulty ${theme}-theme`}>
            <input className="toggle-difficulty_btn side_left" onClick={Decrement} type="button" value="-"/>
            <label className="toggle-difficulty_label">{getDifficultyName()}</label>
            <input className="toggle-difficulty_btn side_right" onClick={Increment} type="button" value="+"/>
        </div>
    )
}