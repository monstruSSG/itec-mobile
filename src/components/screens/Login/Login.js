import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { View, StyleSheet, Keyboard, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Form from '../../../components/common/Form/Form'
import Button from '../../../components/common/Button/Button'
import * as USER from '../../../store/actions/user'

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

    state = {
        showKeyboard: false,
        email: '',
        password: ''
    }

    navigateRegisterHandler = () => this.props.navigation.navigate('Register')
    navigateAuthHandler = () => this.props.navigation.navigate('Auth')

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => this.setState({ showKeyboard: true })

    _keyboardDidHide = () => this.setState({ showKeyboard: false })

    onSubmitPressedHandler = () => this.props.login(this.state.email, this.state.password)
        .then(this.navigateAuthHandler)

    render() {
        return (
            <KeyboardAvoidingView style={[commonStyles.max, commonStyles.blackBackground, commonStyles.centerX]}>
                <View style={[styles.logoContainer]}>
                    <Icon size={WIDTH / 3} name='map-marker-path' color={WHITE_COLOR} />
                </View>
                <View style={[styles.formContainer]}>
                    <Form
                        inputs={[
                            { placeholder: 'EMAIL', type: 'text', value: this.state.email, onChangeText: text => this.setState({ email: text }), autoCapitalize: 'none' },
                            { placeholder: 'PASSWORD', type: 'password', secureTextEntry: true, value: this.state.password, onChangeText: text => this.setState({ password: text }), autoCapitalize: 'none' }
                        ]}
                        submitText='LOGIN'
                        onSubmit={this.onSubmitPressedHandler} />
                </View>
                {!this.state.showKeyboard && <View style={[commonStyles.centerX, styles.register]}>
                    <Button onPress={this.navigateRegisterHandler} styles={styles.registerButton} color={WHITE_COLOR} normal text='REGISTER' />
                </View>}
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = reducers => ({})

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(USER.login(email, password))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(Login));