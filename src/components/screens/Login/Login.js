import React, { Component } from 'react'
import { View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Form from '../../../components/common/Form/Form'

import commonStyles from '../../../styles/common'
import { WHITE_COLOR } from '../../../styles/stylesConstants'

const styles = StyleSheet.create({
    logoContainer: {
        width: '80%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        height: '60%',
        width: '80%'
    },
    logo: {
        width: '100%',
        height: '100%'
    }
})

class Login extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <KeyboardAvoidingView style={[commonStyles.max, commonStyles.blackBackground, commonStyles.centerX]}>
                <View style={[styles.logoContainer]}>
                    <Icon size={150} name='map-marker-path' color={WHITE_COLOR} />
                </View>
                <View style={[styles.formContainer]}>
                    <Form inputs={[
                        { placeholder: 'ANA' }, { placeholder: 'ANA' }, { placeholder: 'ANA' }, { placeholder: 'ANA' }
                    ]} />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default Login