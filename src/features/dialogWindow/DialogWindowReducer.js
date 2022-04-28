import {actionTypes} from "../../app/action-types";

class DialogWindowReducer {


    constructor() {
        this._init = {
            open: false,
        }
        this.reducer = this.reducer.bind(this);
    }

    reducer(state = this._init, action) {
        switch (action.type) {
            // TODO complete reducer

            default: return state;
        }
    }


}

export default new DialogWindowReducer();