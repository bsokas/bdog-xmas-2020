import React from 'react'
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native'
import ImageMappings from '../constants/imageList'
import { ScreenName } from '../constants/stackMappings'

// PictureList is a reusable screen component
// It will take a list of image locations and load the images in a scrollable view
interface Props {
    screenName: ScreenName,
    title: string,
    subtitle: string
}

const PictureList = ({ screenName, title, subtitle }: Props) => {
    const imageProfiles = ImageMappings.get(screenName)
    
    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.subtitleView}>
                <Text style={styles.subtitleText}>{subtitle}</Text>
            </View>
            <View>
                {imageProfiles?.map((profile, index) => {
                    return (
                        <Image 
                            source={profile.path}
                            style={styles.imageCard} 
                            key={index}
                        />
                    )
                })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        paddingHorizontal: 5
    },
    titleView: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontWeight: '700',
        fontSize: 64
    },
    subtitleView: {
        alignItems: 'center',
        marginTop: 10,
    },
    subtitleText: {
        fontWeight: '400',
        fontStyle: 'italic',
        fontSize: 44,
        textAlign: 'center',
        color: 'purple'
    },
    imageCard: {
        marginVertical: 15,
        resizeMode: 'cover',
        height: 400,
        width: '100%'
    }
})

export default PictureList