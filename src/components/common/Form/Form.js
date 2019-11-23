import React from 'react'
import { View, StyleSheet } from 'react-native'

import Input from './TextInput/TextInput'
import Button from '../Button/Button'

import commonStyle from '../../../styles/common'

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
    </View>
)