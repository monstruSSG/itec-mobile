import {createAppContainer, createStackNavigator} from 'react-navigation'

import LoginScreen from './Login/Login'

const ApplicationStack = createStackNavigator({
    Login: {
        screen: LoginScreen
    }
}, {
    initialRouteName: 'Login'
})

export default createAppContainer(ApplicationStack)