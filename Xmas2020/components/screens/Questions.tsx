import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, GestureResponderEvent, Pressable } from 'react-native'
import { questionList } from '../constants/textLists'

const Questions = () => {
    const [questionIndex, setQuestionIndex] = useState<number>(0)
    const [pressInLocX, setPressInLoc] = useState<number>(0)
    const [pressOutLocX, setPressOutLoc] = useState<number>(0)

    useEffect(() => {
        // larger --> smaller means go right
        if (pressOutLocX != pressInLocX) {
            if (pressOutLocX > pressInLocX && questionIndex > 0) {
                setQuestionIndex(questionIndex - 1)
            } else if (pressOutLocX < pressInLocX && questionIndex < questionList.length - 1) {
                setQuestionIndex(questionIndex + 1)
            }
        }
    }, [pressOutLocX])

    const pressHandler = (e: GestureResponderEvent, inPress: boolean) => {
        e.persist()
        if (!e || !e.nativeEvent) return 

        const locX = e.nativeEvent.locationX
        if (inPress){
            setPressInLoc(locX)
        } else {
            setPressOutLoc(locX)
        }
    }

    return (
        <View style={styles.screenContainer}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>
                    When you need to think about the deeper things in life
                </Text>
            </View>
            <Pressable
                onPressIn={(e) => pressHandler(e, true)}
                onPressOut={(e) => pressHandler(e, false)}
            >
                <View style={styles.questionContainer}>
                    <View style={styles.questionView}>
                        <Text style={styles.questionText}>{questionList[questionIndex].text}</Text>
                    </View>
                </View>
            </Pressable>
            <View style={styles.instructionView}>
                <Text style={styles.instructionText}>Swipe left or right to see more</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        height: '100%',
        backgroundColor: 'oldlace'
    },
    titleView: {
        height: 200,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontStyle: 'italic',
        fontSize: 36,
        textAlign: 'center',
        fontWeight: "500",
        color: 'navy'
    },
    questionContainer: {
        height: 400,
        marginHorizontal: 10,
        paddingTop: 50,
        marginBottom: 50,
        borderRadius: 50,
        borderColor: 'darkslateblue',
        borderWidth: 10,
        backgroundColor: 'lightseagreen'
    },
    questionView: {
        paddingHorizontal: 10,
    },
    questionText: {
        fontSize: 40,
        fontWeight: "400",
        textAlign: 'center',
        lineHeight: 50
    },
    instructionView: {
        height: 100,
        alignItems: 'center'
    },
    instructionText: {
        fontSize: 30,
        fontWeight: "500",
        color: 'slateblue'
    },
})

export default Questions