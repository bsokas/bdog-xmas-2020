import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Vibration } from 'react-native'

const colorArray = ['#d4af37', 'aqua', 'darkmagenta', 'deeppink', 'firebrick']

const PartyTime = () => {
    const [ colorIndex, setColorIndex ] = useState(0)

    useEffect(() => {
        const toggle = setInterval(() => 
            setColorIndex(colorIndex == colorArray.length - 1 ? 0 : colorIndex + 1), 1000)
        Vibration.vibrate()

        return () => clearInterval(toggle)
    })

    return(
        <View style={ { height: '100%', backgroundColor: `${colorArray[colorIndex]}`} }>
            <View style={styles.textView}>
                <Text style={styles.partyText}>WOOOOOOOO!</Text>
            </View>
            <View style={styles.imageView}>
                <Image 
                    source={ {uri: 'https://media2.giphy.com/media/eHcmW8fYIRm9qkjvs4/giphy.gif?cid=ecf05e47mwah40zm3fgcsqhd1kmtidzpxtnn8ho7q10v2gay&rid=giphy.gif'} } 
                    style={styles.dancingImg}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    partyView: {
        height: '100%'
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
    },
    partyText: {
        fontWeight: '800',
        fontSize: 48,
        textAlign: 'center',
        paddingTop: 60
    },
    imageView: {
        height: 500,
    },
    dancingImg: {
        marginTop: 100,
        height: 500,
        width: '100%'
    }
})

export default PartyTime