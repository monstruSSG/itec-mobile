import axios from '../../utils/axios'

const CATEGORY_PREFIX = '/Forum/Category'
const TOPIC_PREFIX = '/Forum/Topics'
const MESSAGE_PREFIX = '/Forum/Messages'

export const getCategories = token => dispatch => axios.get(`${CATEGORY_PREFIX}`, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))

export const getCategorieData = (token, id) => dispatch => axios.get(`${CATEGORY_PREFIX}/${id}`, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))

export const getTopicData = (token, id) => dispatch => axios.get(`${TOPIC_PREFIX}/${id}`, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))

export const getCategorie = (token, id) => dispatch =>
    Promise.all([
        axios.get(`${CATEGORY_PREFIX}/${id}/Categories`, { headers: { 'Authorization': `Bearer ${token}` } }),
        axios.get(`${CATEGORY_PREFIX}/${id}/Topics`, { headers: { 'Authorization': `Bearer ${token}` } })
    ]).then(results => Promise.resolve({
        subCategories: results[0].data,
        subTopics: results[1].data
    })).catch(() => Promise.resolve({
        subCategories: [],
        subTopics: []
    }))

export const getMessages = (token, topicId) => dispatch => axios.get(`${TOPIC_PREFIX}/${topicId}/GetMessages`, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))
    .catch(() => Promise.resolve([]))

export const getMessage = (token, messageId) => dispatch => axios.get(`${MESSAGE_PREFIX}/${messageId}`, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))

export const createCategory = (token, category) => dispatch => axios.post(`${CATEGORY_PREFIX}`, category, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))

export const createChildCategory = (token, id, category) => dispatch => axios.post(`${CATEGORY_PREFIX}/${id}/Category`, category, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))

export const createChildTopic = (token, id, topic) => dispatch => axios.post(`${CATEGORY_PREFIX}/${id}/Topic`, topic, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))

export const createMessage = (token, id, message) => dispatch => axios.post(`${TOPIC_PREFIX}/${id}/AddMessage`, message, { headers: { 'Authorization': `Bearer ${token}` } })
    .catch(console.log)

export const deleteMessage = (token, id) => dispatch => axios.delete(`${MESSAGE_PREFIX}/${id}`, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))

export const deleteTopic = (token, id) => dispatch => axios.delete(`${TOPIC_PREFIX}/${id}`, { headers: { 'Authorization': `Bearer ${token}` } })
    .then(res => Promise.resolve(res.data))
