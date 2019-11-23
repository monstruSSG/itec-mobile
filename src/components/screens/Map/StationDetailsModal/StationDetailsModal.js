import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Modal from '../../../common/Modal/Modal'

import CustomText from '../../../common/Text/Text'
import Button from '../../../common/Button/Button'

import { WHITE_COLOR, BLACK_COLOR, RED_COLOR, GREEN_COLOR } from '../../../../styles/stylesConstants'

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContent: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsRow: {
        width: '80%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rest: {
        width: '80%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
})

export default props => (
    <Modal visible={props.visible} title={props.station ? props.station.name : ''}>
        <View style={styles.content}>
            <View style={styles.detailsContent}>
                <View style={styles.detailsRow}>
                    <View style={styles.icon}>
                        <Icon name='ethernet-cable' color={BLACK_COLOR} size={35} />
                    </View>
                    <View style={styles.rest}>
                        <CustomText large>{props.station ? props.station.totalSockets : ''}</CustomText>
                    </View>
                </View>
                <View style={styles.detailsRow}>
                    <View style={styles.icon}>
                        <Icon name='ethernet-cable' color={RED_COLOR} size={35} />
                    </View>
                    <View style={styles.rest}>
                        <CustomText large>{props.station ? Number(props.station.totalSockets) - Number(props.station.freeSockets) : ''}</CustomText>
                    </View>
                </View>
                <View style={styles.detailsRow}>
                    <View style={styles.icon}>
                        <Icon name='ethernet-cable' color={GREEN_COLOR} size={35} />
                    </View>
                    <View style={styles.rest}>
                        <CustomText large>{props.station ? props.station.freeSockets : ''}</CustomText>
                    </View>
                </View>

                <View style={styles.detailsRow}>
                    <View style={styles.icon}>
                        <Icon name='map-marker' color={BLACK_COLOR} size={35} />
                    </View>
                    <View style={styles.rest}>
                        <CustomText small>{props.station ? props.station.location.x : ''}<CustomText large> LAT</CustomText></CustomText>
                    </View>
                </View>
                <View style={styles.detailsRow}>
                    <View style={styles.icon}>
                        <Icon name='map-marker' color={BLACK_COLOR} size={35} />
                    </View>
                    <View style={styles.rest}>
                        <CustomText small>{props.station ? props.station.location.y : ''}<CustomText large> LON</CustomText></CustomText>
                    </View>
                </View>
            </View>
            <Button reverse text='CLOSE' color={WHITE_COLOR} onPress={props.onCancel} />
        </View>
    </Modal>
)
