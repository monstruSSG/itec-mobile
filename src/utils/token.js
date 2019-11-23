import AsyncStorage from '@react-native-community/async-storage'

export const getToken = () => AsyncStorage.getItem('token')