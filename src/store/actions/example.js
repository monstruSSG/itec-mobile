import { EXAMPLE } from './actionTypes'

export const example = someText => dispatch => {
    dispatch({
        type: EXAMPLE,
        payloade: someText
    })
    return Promise.resolve()
}