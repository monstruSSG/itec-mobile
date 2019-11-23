import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import exampleReducer from './reducers/example'
import userReducer from './reducers/user'

const middleware = applyMiddleware(thunk)

const rootReducer = combineReducers({
    example: exampleReducer,
    user: userReducer
})

const configureStore = () => createStore(rootReducer, compose(middleware))

export default configureStore
