import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import Modal from '../../../common/Modal/Modal'
import Form from '../../../common/Form/Form'

import { WHITE_COLOR } from '../../../../styles/stylesConstants'

class AddCarModal extends Component {
    state = {
        model: '',
        company: '',
        year: '',
        autonomy: '',
        batteryLeft: '',
        lastTechRevision: ''
    }

    render() {
        return (
            <Modal visible title='ADD CAR'>
                <ScrollView style={{width: '100%'}}>
                    <Form
                        reverse
                        cancel
                        inputs={[
                            { placeholder: 'MODEL', type: 'text', value: '', onChangeText: text => this.setState({ model: text }) },
                            { placeholder: 'COMPANY', type: 'text', value: '', onChangeText: text => this.setState({ company: text }) },
                            { placeholder: 'YEAR', type: 'text', value: '', onChangeText: text => this.setState({ year: text }) },
                            { placeholder: 'AUTONOMY', type: 'text', value: '', onChangeText: text => this.setState({ autonomy: text }) },
                            { placeholder: 'BATTERY LEFT', type: 'text', value: '', onChangeText: text => this.setState({ batteryLeft: text }) },
                            { placeholder: 'LAST REVISION', type: 'text', value: '', onChangeText: text => this.setState({ lastTechRevision: text }) },
                        ]}
                        submitText='CREATE'
                        cancelText='CANCEL'

                        color={WHITE_COLOR}
                        onSubmit={this.onSubmitPressedHandler} />
                </ScrollView>
            </Modal>
        )
    }
}

export default AddCarModal