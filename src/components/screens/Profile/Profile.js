import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import CustomText from '../../common/Text/Text'

import commonStyles from '../../../styles/common'

const styles = StyleSheet.create({

})

class Profile extends Component {
    render() {
        return (
            <View style={[commonStyles.max, commonStyles.centerX]}>
                <CustomText extra> EUGEN NEAGOE</CustomText>
                <View>

                </View>
                <View>

                </View>
            </View>
        )
    }
}

export default Profile