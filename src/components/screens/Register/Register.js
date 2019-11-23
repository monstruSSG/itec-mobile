import React, { Component } from 'react'
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Form from '../../../components/common/Form/Form'

import commonStyles from '../../../styles/common'
import { WHITE_COLOR, INPUT_HEIGHT, BLACK_COLOR } from '../../../styles/stylesConstants'

class Register extends Component {
    static navigationOptions = {
        title: 'Register',
        headerStyle: {
            backgroundColor: BLACK_COLOR,
            textAlign: 'center'
        },
        headerTintColor: WHITE_COLOR,
        headerTitleStyle: {
            fontWeight: '700',
            fontSize: INPUT_HEIGHT / 2
        }
    }


    render() {
        return (
            <KeyboardAvoidingView style={[commonStyles.max,commonStyles.center]}>
                <View style={{width: '80%', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
                    <Form
                        reverse
                        color={WHITE_COLOR}
                        inputs={[
                            { placeholder: 'EMAIL', type: 'text' },
                            { placeholder: 'FIRST NAME', type: 'text' },
                            { placeholder: 'LAST NAME', type: 'text' },
                            { placeholder: 'PASSWORD', type: 'password' }
                        ]}
                        submitText='Register' />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default Register