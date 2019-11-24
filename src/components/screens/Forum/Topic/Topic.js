import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import CustomText from '../../../common/Text/Text'

import { WIDTH, WHITE_COLOR, GREEN_COLOR, RED_COLOR } from '../../../../styles/stylesConstants'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: WIDTH / 6,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 20,
        borderColor: GREEN_COLOR,
        borderWidth: 3,
        backgroundColor: GREEN_COLOR
    },
    removeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50
    },
    text: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconWrapper: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default props => (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <View style={styles.text}>
            <CustomText color={WHITE_COLOR} small>{props.title}</CustomText>
            <CustomText color={WHITE_COLOR} small>{props.content}</CustomText>
        </View>
        <View style={styles.iconWrapper}>
            <TouchableOpacity style={styles.removeButton} onPress={props.onDelete}>
                <Icon size={35} color={RED_COLOR} name='delete' />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
)