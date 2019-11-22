import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import exampleReducer from './reducers/example'

const middleware = applyMiddleware(thunk)

const rootReducer = combineReducers({
    example: exampleReducer
})

const configureStore = () => createStore(rootReducer, compose(middleware))

export default configureStore
