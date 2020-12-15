import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const PartyTime = () => {
    const navigation = useNavigation()

    const onPress = () => {
        const now = new Date(Date.now())
        if (now.getFullYear() != 2021 && now.getMonth() != 0 && now.getHours() != 15) {
            Alert.alert('It is NOT Party Time Yet.', 
            'Party Time begins on Thursday, January 21st at 3pm, when you have finished the MCAT',   
            )
        } else {
            // TODO go to the party page
            navigation.navigate('PartyTime')
        }
    }

    return(
        <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
            <Text style={styles.buttonText}>PARTY TIME</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyles: {
        backgroundColor: '#2b2b2b',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 350,
        borderRadius: 100,
    },
    buttonText: {
        fontWeight: '700',
        fontSize: 30,
        color: '#d4af37'
    }
})

export default PartyTime