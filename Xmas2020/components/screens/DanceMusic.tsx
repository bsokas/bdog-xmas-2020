import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, View, StyleSheet, Vibration, Text } from 'react-native'
import TrackPlayer from 'react-native-track-player'

const pumpups = ['SHAKE IT!', 'THE MCAT IS YOUR BITCH', 'YOU\'VE GOT THIS', 'PWN THAT SHIT', 'WOAH YEAH']
const colors = ['lime', 'red', 'yellow', 'fuchsia', 'cyan', 'aqua']

const DanceMusic = () => {
    const [pumpupIndex, setPumpupIndex] = useState<number>(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const navigation = useNavigation()

    if(!isPlaying){
        TrackPlayer.setupPlayer().then(async () => {
            await TrackPlayer.add({
                id: 'DanceMusic',
                url: require('Xmas2020/content/get_lucky.m4a'),
                title: 'Get Lucky',
                artist: 'Daft Punk',
            });
    
           TrackPlayer.play()
           setIsPlaying(true)
        });
    }

    useEffect(() => {
        navigation.addListener('beforeRemove', () => {
            TrackPlayer.stop()
            TrackPlayer.destroy()
        })

        const changeIndex = setInterval(() => {
            setPumpupIndex(pumpupIndex - 1 == pumpups.length ? 0 : pumpupIndex + 1)
            Vibration.vibrate()
        }, 800)

        return () => {
            clearInterval(changeIndex)
        }
    })

    return(
        <View style={styles.danceContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{pumpupIndex % 2 == 0 ? 'DANCE PARTY' : ''}</Text>
            </View>
            <View style={styles.gifContainer}>
                <Image 
                    style={styles.gifStyles}
                    source={{ uri: 'https://thumbs.gfycat.com/GiantUltimateGull-size_restricted.gif' } }
                />
            </View>
            <View style={styles.pumpupView}>
                <Text style={{...styles.pumpupText, color: `${colors[pumpupIndex] || 'lime'}`}}>
                    {pumpups[pumpupIndex]}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    danceContainer: {
        height: '100%',
        backgroundColor: 'navy'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    titleText: {
        fontWeight: '700',
        fontSize: 50,
        color: 'magenta'
    },
    gifContainer: {
        width: '100%',
        height: 500,
        paddingTop: 20
    },
    gifStyles: {
        height: 500
    },
    pumpupView: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pumpupText: {
        fontSize: 48,
        fontWeight: '600',
        textAlign: 'center'
    },
})

export default DanceMusic