import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import CustomText from '../../../common/Text/Text'

import { WIDTH, WHITE_COLOR, GREEN_COLOR } from '../../../../styles/stylesConstants'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: WIDTH / 8,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 20,
        borderColor: GREEN_COLOR,
        borderWidth: 3,
        backgroundColor: GREEN_COLOR
    }
})

export default props =>{ 
    
    console.log(props, '{RASD')
    return(
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <CustomText color={WHITE_COLOR} large>{props.title} T</CustomText>
        <CustomText color={WHITE_COLOR} small>{props.contant}</CustomText>
    </TouchableOpacity>
)}