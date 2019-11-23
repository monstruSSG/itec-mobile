import sha256 from 'sha256'
import AsyncStorage from '@react-native-community/async-storage'

import { SAVE_TOKEN, REMOVE_TOKEN } from './actionTypes'
import axios from '../../utils/axios'

const PREFIX = '/AUTH'

export const getMe = token => dispatch => axios.get(`${PREFIX}/Me`, {
    headers: {
        'Authorization': `Bearer ${token}`
    }
}).then(res => Promise.resolve(res.data))

export const login = (email, password) => dispatch => axios.post(`${PREFIX}/Login`, {
    email,
    password
}).then(async res => {
    dispatch({
        type: SAVE_TOKEN,
        payload: res.data.token
    })

    await AsyncStorage.setItem('token', res.data.token)

    return Promise.resolve(res.data)
})

export const register = (email, firstName, lastName, password) => dispatch => axios.post(`${PREFIX}/Register`, {
    email,
    firstName,
    lastName,
    password
}).then(async res => {
    dispatch({
        type: SAVE_TOKEN,
        payload: res.data.token
    })

    await AsyncStorage.setItem('token', res.data.token)

    return Promise.resolve(res.data)
})

export const example = someText => dispatch => {
    dispatch({
        type: EXAMPLE,
        payloade: someText
    })
    return Promise.resolve()
}