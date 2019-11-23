import axios from '../../utils/axios'

const PREFIX = '/Cars'

export const getCars = token => dispatch => axios.get(`${PREFIX}`, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))

    export const createCar = (token , car) => dispatch => axios.post(`${PREFIX}`,{
        ...car,
        lastTechRevision: "2019-11-23T17:22:12.268Z"
    }, { headers: { 'Authorization': `Bearer ${token}` } })
