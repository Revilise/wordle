export const actionTypes = {
    // keyboard reducer
    CHANGE_KEYS_STATE: "0x0000",
    RESET_KEYS_STATE: "0x0001",

    // field reducer
    CHANGE_INPUT_VALUE: "0x1000",
    CLEAR_INPUT_VALUE: "0x1001",
    INCREMENT_TRY_NUMBER: "0x1002",
    RESET_TRY_NUMBER: "0x1003",
    CHANGE_FOCUSED_ROW: "0x1004",
    CHANGE_FOCUSED_CELL: "0x1005",

    // window reducer
    CHANGE_APP_THEME: "0x9000",
    TOGGLE_APP_SOUND: "0x9001",
    CHANGE_APP_DIFFICULTY: "0x9002"
}