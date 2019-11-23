import axios from 'axios'

import { BASE_URL, API_TOKEN } from './constants'

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: { 
        'TEAM_KEY': API_TOKEN 
    }
})