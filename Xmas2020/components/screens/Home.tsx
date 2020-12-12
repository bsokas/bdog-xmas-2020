import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'

import HomeButton from '../buttons/HomeButton'
import { StackProps } from '../constants/stackMappings'

const constants = {
    title: 'MCATivation',
    subtitle: 'Motivational pick-me-ups to keep you going during your exam studying'
}

type Props = { navigation: StackNavigationProp<StackProps, 'Home'>}

const Home = ({ navigation }: Props) => {

    const onButtonPress = () => navigation.navigate('Start')

    return(
        <View style={styles.contentView}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{constants.title}</Text>
            </View>
            <View style={styles.catView}>
            <Image source={require('Xmas2020/content/images/black_cats.png')}/>
            </View>
            <View style={styles.subtitleView}>
                <Text style={styles.subtitleText}>{constants.subtitle}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <HomeButton onPress={onButtonPress}/>
            </View>
        </View>  
    )
}

const styles = StyleSheet.create({
    contentView: {
        paddingHorizontal: 16,
    },
    titleView: {
        marginTop: '20%',
        justifyContent: 'center'
    },
    titleText: {
        fontWeight: '700',
        fontSize: 64,
        color: 'darkviolet'
    },
    catView: {
        paddingVertical: '10%',
        alignItems: 'center'
    },
    subtitleView: {
        // marginTop: '25%'
    },
    subtitleText: {
        fontWeight: '400',
        fontSize: 24,
        textAlign: 'center',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 75,
    }
})

export default Home