import React, { Component } from 'react'
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native'

import Form from '../../../components/common/Form/Form'

import commonStyles from '../../../styles/common'
import { WHITE_COLOR, INPUT_HEIGHT, BLACK_COLOR } from '../../../styles/stylesConstants'

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

class Register extends Component {
    static navigationOptions = {
        title: 'REGISTER',
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

    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    }


    render() {
        return (
            <KeyboardAvoidingView style={[commonStyles.max, commonStyles.center]}>
                <View style={styles.container}>
                    <Form
                        reverse
                        color={WHITE_COLOR}
                        inputs={[
                            { placeholder: 'EMAIL', type: 'text', value: this.state.email, onChangeText: text => this.setState({ email: text }) },
                            { placeholder: 'FIRST NAME', type: 'text', value: this.state.firstName, onChangeText: text => this.setState({ firstName: text }) },
                            { placeholder: 'LAST NAME', type: 'text', value: this.state.lastName, onChangeText: text => this.setState({ lastName: text }) },
                            { placeholder: 'PASSWORD', type: 'password', secureTextEntity: true, value: this.state.password, onChangeText: text => this.setState({ password: text }) }
                        ]}
                        submitText='REGISTER' />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default Register