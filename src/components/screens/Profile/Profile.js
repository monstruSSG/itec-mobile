import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

import CustomText from '../../common/Text/Text'
import * as USER from '../../../store/actions/user'
import { getToken } from '../../../utils/token'
import Gravatar from '../../common/Gravatar/Gravatar'

import commonStyles from '../../../styles/common'
import { BLACK_COLOR, GREY_COLOR, AVATAR_SIZE } from '../../../styles/stylesConstants'

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '25%',
        flexDirection: 'row'
    },
    cars: {
        width: '100%',
        height: '75%',
        backgroundColor: 'green',
        flexDirection: 'row'
    },
    icon: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        width: '60%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    avatar: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE / 2
    }
})

class Profile extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        render: false
    }

    async componentDidMount() {
        this.token = await getToken()
        this.getMe()
    }

    getMe = () => this.props.getMe(this.token).then(me => this.setState({
        ...me,
        render: true
    }))

    render() {
        return (
            <View style={[commonStyles.max, commonStyles.centerX]}>
                {this.state.render && <>
                    <View style={[styles.header]}>
                        <View style={[styles.icon]}>
                            <Gravatar style={styles.avatar} email='giurgibogdans@gmail.com' />
                        </View>
                        <View style={[styles.name]}>
                            <CustomText small color={GREY_COLOR}>{this.state.firstName} {this.state.lastName}</CustomText>
                            <CustomText small color={BLACK_COLOR}>{this.state.email}</CustomText>
                        </View>
                    </View>
                    <View style={[styles.cars]}>
                    </View>
                </>}
            </View>
        )
    }
}

const mapStateToProps = reducers => ({})

const mapDispatchToProps = dispatch => ({
    getMe: token => dispatch(USER.getMe(token))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(Profile));