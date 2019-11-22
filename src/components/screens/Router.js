import { createAppContainer, createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation'
import React from 'react'

import LoginScreen from './Login/Login'
import ForumScreen from './Forum/Forum'
import MapScreen from './Map/Map'
import ProfileScreen from './Profile/Profile'
import AuthLoadingScreen from './AuthLoading/AuthLoading'

import { BLACK_COLOR, WHITE_COLOR } from '../../styles/stylesConstants'
import Icon from 'react-native-vector-icons/FontAwesome5'

const AuthStack = createBottomTabNavigator({
    Map: {
        screen: MapScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor, activeTintColor }) => (
                <Icon name='map-marked' size={35} color={tintColor} />
            )
        },
    },
    Forum: {
        screen: ForumScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor, activeTintColor }) => (
                <Icon name='rocketchat' size={35} color={tintColor} />
            )
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor, activeTintColor }) => (
                <Icon name='user' size={35} color={tintColor} />
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
        },
        labelStyle: {
            fontSize: 20
        }
    }
})

const UnauthStack = createStackNavigator({
    Login: {
        screen: LoginScreen
    }
})

const ApplicationStack = createSwitchNavigator({
    Auth: AuthStack,
    Unauth: UnauthStack,
    AuthLoading: AuthLoadingScreen
}, {
    initialRouteName: 'Auth'
})

export default createAppContainer(ApplicationStack)