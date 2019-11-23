import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Modal from '../../../common/Modal/Modal'
import Form from '../../../common/Form/Form'
import { WHITE_COLOR } from '../../../../styles/stylesConstants'

class AddStationModal extends Component {
    state = {
        name: '',
        totalSockets: 0,
        freeSockets: 0,
        x: '',
        y: ''
    }

    onSubmitPressedHandler = () => this.props.onSubmit({
        name: this.state.name,
        totalSockets: this.state.totalSockets,
        freeSockets: this.state.totalSockets,
        location: {
            x: this.state.x,
            y: this.state.y
        }
    }).then(() => this.setState({
        name: '',
        totalSockets: 0,
        freeSockets: 0,
        x: '',
        y: ''
    }))


    render() {
        return (
            <Modal visible={this.props.visible} title='ADD STATION'>
                <ScrollView style={{ width: '100%' }}>
                    <Form
                        reverse
                        cancel
                        inputs={[
                            { placeholder: 'NAME', type: 'text', value: this.state.name, onChangeText: text => this.setState({ name: text }) },
                            { placeholder: 'TOTAL SOCKETS', type: 'number', value: this.state.totalSockets, onChangeText: text => this.setState({ totalSockets: text }) },
                            { placeholder: 'LATITUDE', type: 'number', value: this.state.x, onChangeText: text => this.setState({ x: text }) },
                            { placeholder: 'LONGITUDE', type: 'number', value: this.state.y, onChangeText: text => this.setState({ y: text }) }
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


export default AddStationModal