import React from 'react'
import { Image } from 'react-native'
import md5 from 'md5'

import { GRAVATAR_URL } from '../../../utils/constants'

const hashEmail = props => md5(props.email.toLowerCase().trim())

export default props => {
    return (
        <Image style={[props.style]} source={{ uri: `${GRAVATAR_URL}/${hashEmail(props)}` }} />
    )
}