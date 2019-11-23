import React, { Component } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/Octicons'

import CustomText from '../../common/Text/Text'
import * as USER from '../../../store/actions/user'
import * as CAR from '../../../store/actions/car'
import { getToken } from '../../../utils/token'
import Gravatar from '../../common/Gravatar/Gravatar'
import Car from './Car/Car'
import AddCar from './AddCarModal/AddCarModal'

import commonStyles from '../../../styles/common'
import { BLACK_COLOR, GREY_COLOR, AVATAR_SIZE, WHITE_COLOR, WIDTH } from '../../../styles/stylesConstants'

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '25%',
        flexDirection: 'row'
    },
    cars: {
        width: '80%',
        height: '75%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: '40%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        width: '60%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    avatar: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE / 2
    },
    addCar: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: GREY_COLOR,
        borderRadius: 100
    },
    plusIcon: {
        paddingLeft: WIDTH / 8
    }
})

class Profile extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        render: false,
        showAddCarModal: false,
        cars: [],
        updateCar: false
    }

    async componentDidMount() {
        this.token = await getToken()
        this.getMe()
        this.getCars()
    }

    getMe = () => this.props.getMe(this.token).then(me => this.setState({
        ...me,
        render: true
    }))

    getCars = () => this.props.getCars(this.token)
        .then(cars => this.setState({ cars }))

    onCarSubmitHandler = car => {
        this.setState({ showAddCarModal: false })
        this.props.createCar(this.token, car)
            .then(this.getCars)
    }

    onDeleteCarHandler = id => this.props.deleteCar(this.token, id)
        .then(this.getCars)

    render() {
        return (
            <View style={[commonStyles.max, commonStyles.centerX]}>
                <AddCar
                    visible={this.state.showAddCarModal}
                    onSubmit={this.onCarSubmitHandler}
                    onCancel={() => this.setState({ showAddCarModal: false })}
                />
                {this.state.render && <>
                    <View style={[styles.header]}>
                        <View style={[styles.icon]}>
                            <Gravatar style={styles.avatar} email={this.state.email} />
                        </View>
                        <View style={[styles.name]}>
                            <CustomText small color={GREY_COLOR}>{this.state.firstName} {this.state.lastName}</CustomText>
                            <CustomText small color={BLACK_COLOR}>{this.state.email}</CustomText>
                        </View>
                    </View>
                    <View style={[styles.cars]}>
                        <TouchableOpacity style={[styles.addCar]} onPress={() => this.setState({ showAddCarModal: true })}>
                            <CustomText large color={WHITE_COLOR}>CAR</CustomText>
                            <Icon name='plus' size={WIDTH / 12} color={WHITE_COLOR} style={styles.plusIcon} />
                        </TouchableOpacity>
                        <View style={[commonStyles.carList]}>
                            <FlatList
                                style={[commonStyles.max]}
                                data={this.state.cars.map(car => ({
                                    key: car.id,
                                    ...car
                                }))}
                                renderItem={({ item }) => <Car
                                    model={item.model}
                                    company={item.company}
                                    battery={item.batteryLeft}
                                    onDelete={() => this.onDeleteCarHandler(item.key)}
                                />}
                            />
                        </View>
                    </View>
                </>}
            </View>
        )
    }
}

const mapStateToProps = reducers => ({})

const mapDispatchToProps = dispatch => ({
    getMe: token => dispatch(USER.getMe(token)),
    getCars: token => dispatch(CAR.getCars(token)),
    createCar: (token, car) => dispatch(CAR.createCar(token, car)),
    deleteCar: (token, id) => dispatch(CAR.deleteCar(token, id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(Profile));