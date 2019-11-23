import React, { Component } from 'react'
import { ScrollView } from 'react-native'
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

    onSubmitPressedHandler = () => this.props.onSubmit({
        model: this.state.model,
        company: this.state.company,
        year: this.state.year,
        autonomy: this.state.autonomy,
        batteryLeft: this.state.batteryLeft,
        lastTechRevision: this.state.lastTechRevision
    }).then(() => this.setState({
        model: '',
        company: '',
        year: '',
        autonomy: '',
        batteryLeft: '',
        lastTechRevision: ''
    }))


    render() {
        return (
            <Modal visible={this.props.visible} title='ADD CAR'>
                <ScrollView style={{ width: '100%' }}>
                    <Form
                        reverse
                        cancel
                        inputs={[
                            { placeholder: 'MODEL', type: 'text', value: this.state.model, onChangeText: text => this.setState({ model: text }) },
                            { placeholder: 'COMPANY', type: 'text', value: this.state.company, onChangeText: text => this.setState({ company: text }) },
                            { placeholder: 'YEAR', type: 'text', value: this.state.year, onChangeText: text => this.setState({ year: text }) },
                            { placeholder: 'AUTONOMY', type: 'text', value: this.state.autonomy, onChangeText: text => this.setState({ autonomy: text }) },
                            { placeholder: 'BATTERY LEFT', type: 'text', value: this.state.batteryLeft, onChangeText: text => this.setState({ batteryLeft: text }) },
                            { placeholder: 'LAST REVISION', type: 'text', value: this.state.lastTechRevision, onChangeText: text => this.setState({ lastTechRevision: text }) },
                        ]}
                        submitText='CREATE'
                        cancelText='CANCEL'

                        color={WHITE_COLOR}
                        onSubmit={this.onSubmitPressedHandler}
                        onCancel={this.props.onCancel} />
                </ScrollView>
            </Modal>
        )
    }
}


export default AddCarModal