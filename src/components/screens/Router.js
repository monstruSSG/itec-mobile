import { createAppContainer, createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation'
import React from 'react'

import LoginScreen from './Login/Login'
import ForumScreen from './Forum/Forum'
import MapScreen from './Map/Map'
import ProfileScreen from './Profile/Profile'
import AuthLoadingScreen from './AuthLoading/AuthLoading'
import RegisterScreen from './Register/Register'

import { BLACK_COLOR, WHITE_COLOR, LOGO_DIMENSION } from '../../styles/stylesConstants'
import Icon from 'react-native-vector-icons/FontAwesome5'

const AuthStack = createBottomTabNavigator({
    Map: {
        screen: MapScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='map-marked' size={LOGO_DIMENSION} color={tintColor} />
            )
        },
    },
    Forum: {
        screen: ForumScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='rocketchat' size={LOGO_DIMENSION} color={tintColor} />
            )
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name='user' size={LOGO_DIMENSION} color={tintColor} />
            )
        },
    }
}, {
    initialRouteName: 'Map',
    tabBarOptions: {
        showLabel: false,
        activeTintColor: WHITE_COLOR,
        tintColor: WHITE_COLOR,
        style: {
            backgroundColor: BLACK_COLOR
        }
    }
})

const UnauthStack = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
}, {
    initialRouteName: 'Login',
    headerLayoutPreset: 'center'
})

const ApplicationStack = createSwitchNavigator({
    Auth: AuthStack,
    Unauth: UnauthStack,
    AuthLoading: AuthLoadingScreen
}, {
    initialRouteName: 'AuthLoading'
})

export default createAppContainer(ApplicationStack)