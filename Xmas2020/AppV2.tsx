import React from 'react'

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native'
import { AppButton } from './components/buttons/AppButton'

const constants = {
    title: 'MCATivation',
    subtitle: 'Worthless motivational quotes to keep you going during your exam studying'
}

export const AppV2 = () => (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="purple"/>
        <SafeAreaView>
            <View style={styles.appView}>
                <View style={styles.contentView}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>{constants.title}</Text>
                    </View>
                    <View style={styles.catView}>
                    <Image source={require('./content/images/black_cats.png')}/>
                    </View>
                    <View style={styles.subtitleView}>
                        <Text style={styles.subtitleText}>{constants.subtitle}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <AppButton />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </>
)

const styles = StyleSheet.create({
    appView: {
        backgroundColor: 'aliceblue',
        height: '100%'
    },
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
        // justifyContent: 'center',
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
        // lineHeight: 1.6
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 75,
    }
})