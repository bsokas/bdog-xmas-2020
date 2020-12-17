import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { quoteList, Quote } from '../constants/textLists'

function getRandomIndex(limit: number): number {
    return Math.floor(Math.random() * Math.floor(limit))
}

const Quotes = () => {
    const [quoteIndex, setQuoteIndex] = useState<number>(getRandomIndex(quoteList.length - 1))
    const [usedIndexList, setUsedIndexList] = useState(new Set<number>([quoteIndex]))
    const [quoteProfile, setQuoteProfile] = useState<Quote>(quoteList[quoteIndex])

    useEffect(() => {   

    }, [quoteIndex])

    const onPress = () => {
        let newIndex = getRandomIndex(quoteList.length)

        if (usedIndexList.size == quoteList.length){
            setUsedIndexList(new Set<number>())
            setQuoteIndex(newIndex)
            setQuoteProfile(quoteList[newIndex])
            return
        } 
        
        while (usedIndexList.has(newIndex)) {
            newIndex = getRandomIndex(quoteList.length)
        }

        setQuoteIndex(newIndex)
        setQuoteProfile(quoteList[newIndex])

        usedIndexList.add(newIndex)
        setUsedIndexList(usedIndexList)
    }

    return(
        <View style={styles.quoteView}>
            <View style={styles.quoteContainer}>
                <Text style={styles.quoteText}>{`"${quoteProfile.text}"`}</Text>
                <Text style={styles.quoteAuthor}>{quoteProfile.author}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onPress} style={styles.buttonStyles}>
                    <Text style={styles.buttonText}>Read Another</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    quoteView: {
        height: '100%',
        backgroundColor: 'lavender'
    },
    quoteContainer: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        height: '70%'
    },
    quoteText: {
        fontSize: 64,
        fontFamily: 'Bradley Hand',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    quoteAuthor: {
        marginTop: 50,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonContainer: {
        paddingTop: 50,
        alignItems: 'center',
    },
    buttonStyles: {
        backgroundColor: 'lightgreen',
        borderRadius: 100,
        height: 80,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 30,
        fontWeight: '500'
    }
})

export default Quotes