import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

class Map extends Component {
    render() {
        return (
            <MapView
                style={{
                    width: '100%',
                    height: '100%'
                }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />

        )
    }
}

export default Map