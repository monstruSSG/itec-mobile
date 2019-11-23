import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { CAR_SIZE, BLACK_COLOR, WIDTH, WHITE_COLOR } from '../../../../styles/stylesConstants'
import CustomText from '../../../common/Text/Text'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: CAR_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 3,
        borderColor: BLACK_COLOR,
        flexDirection: 'row'
    },
    name: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    battery: {
        width: '35%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    editButton: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    edit: {
        height: WIDTH / 8,
        width: WIDTH / 8,
        borderRadius: WIDTH / 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BLACK_COLOR
    }
})

export default props => (
    <View style={[styles.container]}>
        <View style={[styles.name]}>
            <CustomText small>Model 3</CustomText>
            <CustomText small>Tesla</CustomText>
        </View>
        <View style={[styles.battery]}>
            <Icon size={WIDTH / 12} name='battery-full' color={BLACK_COLOR} />
            <CustomText>80%</CustomText>
        </View>
        <View style={[styles.editButton]}>
            <TouchableOpacity style={[styles.edit]}>
                <Icon size={styles.edit.height / 2} name='edit' color={WHITE_COLOR} />
            </TouchableOpacity>
        </View>
    </View>
)