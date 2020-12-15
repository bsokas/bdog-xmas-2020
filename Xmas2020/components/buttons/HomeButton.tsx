import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type Props = {
    onPress: (event: GestureResponderEvent) => void
}

const HomeButton = (props: Props) => {
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyles}>
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
        fontSize: 24,
    }
})

export default HomeButton