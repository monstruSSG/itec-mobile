import { SAVE_TOKEN, REMOVE_TOKEN } from '../actions/actionTypes'

const initialState = {
    token: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case REMOVE_TOKEN:
            return {
                ...state,
                token: null
            }
        default:
            return state
    }
}

export default userReducer