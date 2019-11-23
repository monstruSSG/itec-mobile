import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native'

import Form from '../../../components/common/Form/Form'
import * as USER from '../../../store/actions/user'

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

    onSubmitPressedHandler = () => this.props.register(this.state.email, this.state.firstName, this.state.lastName, this.state.password)
        .then(console.log)
        .catch(console.log)

    render() {
        return (
            <KeyboardAvoidingView style={[commonStyles.max, commonStyles.center]}>
                <View style={styles.container}>
                    <Form
                        reverse
                        color={WHITE_COLOR}
                        inputs={[
                            { placeholder: 'EMAIL', type: 'text', value: this.state.email, onChangeText: text => this.setState({ email: text }), autoCapitalize: 'none' },
                            { placeholder: 'FIRST NAME', type: 'text', value: this.state.firstName, onChangeText: text => this.setState({ firstName: text }) },
                            { placeholder: 'LAST NAME', type: 'text', value: this.state.lastName, onChangeText: text => this.setState({ lastName: text }) },
                            { placeholder: 'PASSWORD', type: 'password', secureTextEntity: true, value: this.state.password, onChangeText: text => this.setState({ password: text }), autoCapitalize: 'none' }
                        ]}
                        submitText='REGISTER'
                        onSubmit={this.onSubmitPressedHandler} />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = reducers => ({})

const mapDispatchToProps = dispatch => ({
    register: (email, firstName, lastName, password) => dispatch(USER.register(email, firstName, lastName, password))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(Register));