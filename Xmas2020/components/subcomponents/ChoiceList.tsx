import React from 'react'
import { ScrollView, View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CatButton from '../buttons/CatButton'
import { ScreenName } from '../constants/stackMappings'

interface Choices {
    buttonText: String,
    goToOnPress: ScreenName,
}

const choices: Choices[] = [
    {
        buttonText: 'Max and Obi',
        goToOnPress: 'MaxAndObi'
    },
    {
        buttonText: 'Inspirational Quotes',
        goToOnPress: 'Quotes'
    },
    {
        buttonText: 'Pictures of Tucson',
        goToOnPress: 'Tucson'
    },
    {
        buttonText: 'Philosophical Questions',
        goToOnPress: 'Questions'
    },
    {
        buttonText: 'Dance Music',
        goToOnPress: 'DanceMusic'
    }
]

const ChoiceList = () => {
    const navigation = useNavigation()

    return(
        <ScrollView style={styles.choiceListView}>
            {choices.map((choice, index) => <CatButton {...choice} key={`goto${index}-${choice.goToOnPress}`}/>)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    choiceListView: {
        height: '100%',
        paddingHorizontal: 5,
    }
})

export default ChoiceList