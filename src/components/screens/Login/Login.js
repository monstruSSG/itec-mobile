import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Form from '../../../components/common/Form/Form'
import CustomText from '../../../components/common/Text/Text'
import Button from '../../../components/common/Button/Button'

import commonStyles from '../../../styles/common'
import { WHITE_COLOR, WIDTH, BLACK_COLOR } from '../../../styles/stylesConstants'

const styles = StyleSheet.create({
    logoContainer: {
        width: '80%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        flex: 1,
        width: '80%'
    },
    logo: {
        width: '100%',
        height: '100%'
    },
    register: {
        width: '80%',
        flex: 1
    },
    registerButton: {
        backgroundColor: BLACK_COLOR,
        color: WHITE_COLOR
    }
})

class Login extends Component {
    static navigationOptions = {
        header: null
    }

    navigateRegisterHandler = () => this.props.navigation.navigate('Register')

    render() {
        return (
            <KeyboardAvoidingView style={[commonStyles.max, commonStyles.blackBackground, commonStyles.centerX]}>
                <View style={[styles.logoContainer]}>
                    <Icon size={WIDTH / 3} name='map-marker-path' color={WHITE_COLOR} />
                </View>
                <View style={[styles.formContainer]}>
                    <Form
                        inputs={[
                            { placeholder: 'EMAIL', type: 'text' },
                            { placeholder: 'PASSWORD', type: 'password' }
                        ]}
                        submitText='Login' />
                </View>
                <View style={[commonStyles.centerX, styles.register]}>
                    <Button onPress={this.navigateRegisterHandler} styles={styles.registerButton} color={WHITE_COLOR} normal text='Register' />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default Login