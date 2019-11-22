import { AppRegistry } from 'react-native'
import React from 'react'

import { name as appName } from './app.json'
import configureStore from './src/store/configureStore'
import Router from './src/components/screens/Router'
import { Provider } from 'react-redux'

const store = configureStore()

const ElectricApp = () => (
    <Provider store={store}>
        <Router />
    </Provider>
)

AppRegistry.registerComponent(appName, () => ElectricApp);
