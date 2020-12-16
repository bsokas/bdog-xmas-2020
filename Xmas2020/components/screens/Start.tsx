import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { ChoiceList } from '../subcomponents'

const content = {
    instruction: 'Choose an option to un-fry that brain or make that frown turn upside down!'
}

const Start = () => {
    return (
        <>
            <View style={styles.screenView}>
                <View style={styles.instructionView}>
                    <Text style={styles.instructionText}>{content.instruction}</Text>
                </View>
                <View style={styles.listContainer}>
                    <ChoiceList />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    screenView: {
        height: '100%',
    },
    instructionView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 50
    },
    instructionText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listContainer: {
        marginTop: 50,
    }
})

export default Start