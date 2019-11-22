import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

import { WHITE_COLOR, INPUT_HEIGHT } from '../../../../styles/stylesConstants'

const styles = StyleSheet.create({
    input: {
        height: INPUT_HEIGHT,
        width: '100%',
        borderBottomColor: WHITE_COLOR,
        borderBottomWidth: 3
    }
})

export default props => (
    <TextInput style={styles.input} {...props} />
)