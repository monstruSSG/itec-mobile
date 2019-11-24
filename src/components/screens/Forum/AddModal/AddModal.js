import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Modal from '../../../common/Modal/Modal'
import Form from '../../../common/Form/Form'
import { WHITE_COLOR } from '../../../../styles/stylesConstants'

export default props => (
    <Modal visible={props.visible} title={props.title}>
        <ScrollView style={{ width: '100%' }}>
            <Form
                reverse
                cancel
                inputs={props.inputs}
                submitText={props.submitText}
                cancelText='CANCEL'

                color={WHITE_COLOR}
                onSubmit={props.onSubmit}
                onCancel={props.onCancel} />
        </ScrollView>
    </Modal>
)
