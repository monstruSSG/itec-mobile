import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import { WHITE_COLOR, INPUT_HEIGHT, BLACK_COLOR } from '../../../../styles/stylesConstants'

const styles = StyleSheet.create({
    input: {
        height: INPUT_HEIGHT,
        width: '100%',
        borderBottomColor: WHITE_COLOR,
        borderBottomWidth: 3,
        color: WHITE_COLOR,
        fontSize: INPUT_HEIGHT / 4
    },
    inputReverse: {
        height: INPUT_HEIGHT,
        width: '100%',
        borderBottomColor: BLACK_COLOR,
        borderBottomWidth: 3,
        color: BLACK_COLOR,
        fontSize: INPUT_HEIGHT / 4
    }
})

export default props => (
    <TextInput style={props.reverse ? styles.inputReverse : styles.input} placeholderTextColor={props.reverse ? BLACK_COLOR : WHITE_COLOR} {...props} />
)