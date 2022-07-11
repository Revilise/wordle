import Rules from "./contentBoxes/Rules/Rules";
import Settings from "./contentBoxes/Settings/Settings";
import {EndWin, EndDefeat} from "./contentBoxes/End/End";

export class PopupFactory {
    static createElem(type) {
        switch (type) {
            case "rules":
                return new RulesPopup()
            case "settings":
                return new SettingsPopup()
            case "text":
                return new TextPopup()
            case "win":
                return new WinPopup()
            case "defeat":
                return new DefeatPopup()
            default:
                throw new Error("Unknown type of popup: " + type);
        }
    }
}

export class Popup {
    component;
    props = {};
    content;
    get() {
        return this.component(this.props);
    }
    setProps(props) {
        this.props = {...props};
    }
}

export class TextPopup extends Popup {
    constructor() {
        super();
        this.content = "";
        this.component = (props) => (
            <p>{props.content || "default"}</p>
        )
    }
}

export class RulesPopup extends Popup {
    constructor() {
        super();
        this.component = Rules;
    }
}

export class SettingsPopup extends Popup {
    constructor() {
        super();
        this.component = Settings;
    }
}

export class WinPopup extends Popup {
    constructor() {
        super();
        this.component = EndWin;
    }
}

export class DefeatPopup extends Popup {
    constructor() {
        super();
        this.component = EndDefeat;
    }
}