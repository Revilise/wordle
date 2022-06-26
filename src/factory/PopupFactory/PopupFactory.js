import Rules from "./contentBoxes/Rules/Rules";
import Settings from "./contentBoxes/Settings/Settings";
import EndBox from "./contentBoxes/End/EndBox";

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
    props;
    content;
    get() {
        console.log(this.component)
        return this.component(this.props);
    }
    setProps(props) {
        this.props = {...props};
    }
    setText(text) {
        this.content = text;
    }
}

export class TextPopup extends Popup {
    constructor() {
        super();
        this.content = "";
        this.component = ({children}) => (
            <p>{children}</p>
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
        this.component = EndBox.Win;
    }
}

export class DefeatPopup extends Popup {
    constructor() {
        super();
        this.component = EndBox.Defeat;
    }
}