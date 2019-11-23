import { StyleSheet } from 'react-native'

import { BLACK_COLOR, INPUT_HEIGHT, WHITE_COLOR } from './stylesConstants'

export default StyleSheet.create({
    max: {
        width: '100%',
        height: '100%'
    },
    blackBackground: {
        backgroundColor: BLACK_COLOR
    },
    centerX: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        borderWidth: 3,
        borderRadius: 100,
        borderColor: WHITE_COLOR,
        width: '100%',
        height: INPUT_HEIGHT,
        fontFamily: 'Roboto',
        fontSize: INPUT_HEIGHT,
        color: BLACK_COLOR,
        backgroundColor: WHITE_COLOR
    },
    buttonReverse: {
        borderWidth: 3,
        borderRadius: 100,
        borderColor: BLACK_COLOR,
        width: '100%',
        height: INPUT_HEIGHT,
        fontFamily: 'Roboto',
        fontSize: INPUT_HEIGHT,
        color: WHITE_COLOR,
        backgroundColor: BLACK_COLOR
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    whiteBackground: {
        backgroundColor: WHITE_COLOR   
    }
})