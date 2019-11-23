import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE, CalloutSubview, Callout } from 'react-native-maps'
import geolocation from 'react-native-geolocation-service'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions'
import Icon from 'react-native-vector-icons/FontAwesome'

import { regionFrom } from '../../../utils/location'
import * as STATION from '../../../store/actions/station'
import { getToken } from '../../../utils/token'

import commonStyles from '../../../styles/common'
import { BLACK_COLOR } from '../../../styles/stylesConstants'

const styles = StyleSheet.create({
    floatingAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 50,
        height: 50,
        right: 20,
        bottom: 20
    },
    content: {
        flex: 1,
        position: 'relative'
    }
})

class Map extends Component {
    state = {
        currentPosition: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        stations: [],
    }

    async componentDidMount() {
        //Check ACCESS PERMISSION
        try {
            this.token = await getToken()
            this.getStations()
            let result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            switch (result) {
                case RESULTS.UNAVAILABLE:
                    alert('This feature is not available')
                    break
                case RESULTS.DENIED:
                    await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
                    break
                case RESULTS.BLOCKED:
                    alert('You cannot access the maps until you allow location for this app')
                    break
            }
        } catch (e) {
            console.log(e)
        }

        geolocation.setRNConfiguration({ skipPermissionRequests: true })
        geolocation.requestAuthorization()
        geolocation.getCurrentPosition(result => this.setState({
            currentPosition: { ...regionFrom(result.coords.latitude, result.coords.longitude, result.coords.accuracy) }
        }));
    }

    getStations = () => this.props.getStations(this.token).then(stations => this.setState({ stations }))

    render() {
        return (
            <View style={[commonStyles.max, commonStyles.centerX, styles.content]}>
                <MapView
                    style={[commonStyles.max, { ...StyleSheet.absoluteFillObject }]}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={this.state.currentPosition}
                    onRegionChange={console.log}
                >
                    <MapView.Marker
                        draggable
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324
                        }}
                        title={"title"}
                        description={"description"}
                    />
                </MapView>
                <TouchableOpacity style={[styles.floatingAdd]} onPress={() => alert()}>
                    <Icon name='plus-circle' size={50} />
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = reducers => ({
})

const mapDispatchToProps = dispatch => ({
    getStations: token => dispatch(STATION.getStations(token))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withNavigation(Map));