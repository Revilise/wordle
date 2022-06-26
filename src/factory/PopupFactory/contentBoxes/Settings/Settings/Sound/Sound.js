import soundOn from '../../../../../../assets/icons/sound_on.svg';
import soundOff from '../../../../../../assets/icons/sound_off.svg';

import soundOn_dark from '../../../../../../assets/icons/sound_on_dark.svg';
import soundOff_dark from '../../../../../../assets/icons/sound_off_dark.svg';

import './Sound.css'

export default function Sound({sound, theme, handler}) {
    return (
        <div className={`toggle-sound ${theme}-theme`}>
            <button onClick={handler} className="toggle-sound_btn">
                {theme === "light"
                    ? <img src={sound ? soundOff : soundOn} alt="" />
                    : <img src={sound ? soundOff_dark : soundOn_dark} alt="" />
                }
            </button>
        </div>
    )
}
