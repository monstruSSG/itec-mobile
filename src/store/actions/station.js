import axios from '../../utils/axios'

const PREFIX = '/Stations'

export const getStations = token => dispatch => axios.get(`${PREFIX}`, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))

export const createStation = (token, station) => dispatch => axios.post(`${PREFIX}`, { ...station }, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))

