import React from 'react'
import { View } from 'react-native'

import Input from './TextInput/TextInput'

import commonStyle from '../../../styles/common'
import { WHITE_COLOR } from '../../../styles/stylesConstants'

export default props => {


    return (
        <View style={[commonStyle.max]}>
            {props.inputs.map(input => <Input {...input} />)}
        </View>
    )
}