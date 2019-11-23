import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { CAR_SIZE, BLACK_COLOR, WIDTH, WHITE_COLOR, RED_COLOR } from '../../../../styles/stylesConstants'
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
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    battery: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    editButton: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    edit: {
        height: WIDTH / 8,
        width: WIDTH / 8,
        borderRadius: WIDTH / 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BLACK_COLOR
    },
    delete: {
        height: WIDTH / 8,
        width: WIDTH / 8,
        borderRadius: WIDTH / 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: RED_COLOR
    }
})

export default props => (
    <View style={[styles.container]}>
        <View style={[styles.name]}>
            <CustomText small>{props.model}</CustomText>
            <CustomText small>{props.company}</CustomText>
        </View>
        <View style={[styles.battery]}>
            <Icon size={WIDTH / 12} name='battery-full' color={BLACK_COLOR} />
            <CustomText>{props.battery}%</CustomText>
        </View>
        <View style={[styles.editButton, {justifyContent: 'flex-end'}]} >
            <TouchableOpacity style={[styles.edit]}>
                <Icon size={styles.edit.height / 2} name='edit' color={WHITE_COLOR} />
            </TouchableOpacity>
        </View>
        <View style={[styles.editButton]}>
            <TouchableOpacity style={[styles.delete]} onPress={props.onDelete}>
                <Icon size={styles.edit.height / 2} name='delete' color={WHITE_COLOR} />
            </TouchableOpacity>
        </View>
    </View>
)