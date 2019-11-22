import {EXAMPLE} from '../actions/actionTypes'

const initialState = {
    someText: null
}

const exampleReducer = (state = initialState, action) => {
    switch(action.type) {
        case EXAMPLE:
            return {
                ...state,
                someText: action.payload
            }
        default:
            return state
    }
}

export default exampleReducer