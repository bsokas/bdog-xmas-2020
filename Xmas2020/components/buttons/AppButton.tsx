import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const AppButton = () => {

    const onPress = () => {}

    return(
        <TouchableOpacity onPress={onPress} style={styles.buttonStyles}>
            <Text style={styles.textStyles}>Get Motivated</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyles: {
        backgroundColor: 'turquoise',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 350,
        borderRadius: 100,
    },
    textStyles: {
        fontWeight: '600',
        fontSize: 20,
    }
})