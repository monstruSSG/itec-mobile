import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import CustomText from '../Text/Text'

import commonStyles from '../../../styles/common'

export default props => (
    <TouchableOpacity onPress={props.onPress} style={[props.reverse ? commonStyles.buttonReverse : commonStyles.button, commonStyles.center, props.styles]}>
        <CustomText {...props}>{props.text}</CustomText>
    </TouchableOpacity>
) 