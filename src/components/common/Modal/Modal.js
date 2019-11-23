import React from 'react';
import { StyleSheet, Modal, View, TouchableOpacity } from 'react-native';

import { BLACK_COLOR, WHITE_COLOR } from '../../../styles/stylesConstants'

import CustomText from '../Text/Text'

const modalTemplate = props => (
    <Modal visible={props.visible} onRequestClose={props.onClose} animationType={props.modalAnimation ? props.modalAnimation : 'slide'} transparent>
        <View style={[styles.max, styles.center, styles.container]}>
            <View style={[styles.content]}>
                <View style={[styles.header]}>
                    <CustomText color={WHITE_COLOR} large>{props.title}</CustomText>
                </View>
                <View style={[styles.form]}>
                    {props.children}
                </View>
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    form: {
        height: '85%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BLACK_COLOR,
        borderTopEndRadius: 25,
        borderTopLeftRadius: 25
    },
    max: {
        width: '100%',
        height: '100%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    content: {
        backgroundColor: WHITE_COLOR,
        width: '90%',
        height: '75%',
        borderTopEndRadius: 25,
        borderTopLeftRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default modalTemplate;