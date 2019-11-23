import React from 'react'
import { View, StyleSheet } from 'react-native'

import Input from './TextInput/TextInput'
import Button from '../Button/Button'

import commonStyle from '../../../styles/common'
import { GREY_COLOR, WHITE_COLOR } from '../../../styles/stylesConstants'

const styles = StyleSheet.create({
    inputs: {
        width: '100%',
        marginBottom: 20
    }
})

export default props => (
    <View style={[commonStyle.max]}>
        <View style={[styles.inputs, styles.center]}>
            {props.inputs.map(input => <Input reverse={props.reverse ? true : undefined} {...input} />)}
        </View>
        <Button {...props} normal onPress={props.onSubmit} text={props.submitText} />
        {props.cancel ? <View style={{marginTop: 20, marginBottom: 20}}><Button styles={{
            backgroundColor: GREY_COLOR,
            color: WHITE_COLOR,
            borderColor: GREY_COLOR
        }} {...props} normal onPress={props.onCancel} text={props.cancelText} /></View>: null}
    </View>
)