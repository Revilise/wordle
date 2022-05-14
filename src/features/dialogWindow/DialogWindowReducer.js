import {actionTypes} from "../../app/action-types";

class DialogWindow {
    constructor() {
        this._init = {
            open: false,
            title: "",
            content: "",
            role: "none"
        }
        this.reducer = this.reducer.bind(this);
    }

    reducer(state = this._init, action) {
        switch (action.type) {
            // TODO complete reducer
            // show/hide window
            case actionTypes.SHOW_WINDOW:
                const {open, title, content, role} = action.obj;
                return {...state,
                        open: open,
                        title: title || "default",
                        content: content || "default",
                        role: role || "default"
                    }
            default: return state;
        }
    }

    showWindowActionCreator = (obj) => ({
        type: actionTypes.SHOW_WINDOW,
        obj
    })
}
const dialogWindow = new DialogWindow();

export const {
    showWindowActionCreator,
} = dialogWindow;

export default dialogWindow.reducer;