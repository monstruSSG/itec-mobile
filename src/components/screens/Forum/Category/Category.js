import React from 'react'
import { View, StyleSheet,TouchableOpacity } from 'react-native'

import CustomText from '../../../common/Text/Text'

import { WIDTH, GREY_COLOR, WHITE_COLOR } from '../../../../styles/stylesConstants'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: WIDTH / 8,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 20,
        borderColor: GREY_COLOR,
        borderWidth: 3,
        backgroundColor: GREY_COLOR
    }
})

export default props => (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <CustomText color={WHITE_COLOR} large>{props.title} C</CustomText>
    </TouchableOpacity>
)