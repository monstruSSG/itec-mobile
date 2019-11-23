import sha256 from 'sha256'

import { SAVE_TOKEN, REMOVE_TOKEN } from './actionTypes'
import axios from '../../utils/axios'

const PREFIX = '/AUTH'

export const login = (email, password) => dispatch => axios.post(`${PREFIX}/Login`, {
    email,
    password: `${sha256(password)}$P` 
}).then(res => Promise.resolve(res.data))

export const register = (email, firstName, lastName, password) => dispatch => axios.post(`${PREFIX}/Register`, {
    email,
    firstName,
    lastName,
    password: `${sha256(password)}$P`,
    password: `${sha256(password)}$P`
}).then(res => Promise.resolve(res.data))

export const example = someText => dispatch => {
    dispatch({
        type: EXAMPLE,
        payloade: someText
    })
    return Promise.resolve()
}