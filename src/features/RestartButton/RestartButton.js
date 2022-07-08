import {useDispatch} from "react-redux";
import {resetGame} from "../Game/GameReducer";
import {closePopup} from "../Popup/PopupReducer";
import WordleProcessor from "../../wordleProcessor/WordleProcessor";
import Button from "../Button/Button";

export default function RestartButton() {
    const dispatch = useDispatch();

    const restartGame = () => {
        dispatch(resetGame());
        dispatch(closePopup());
        WordleProcessor.GenerateRandomWord();
    }
    return (
        <Button handler={restartGame}>
            Restart
        </Button>
    )
}