import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { ScreenName } from '../constants/stackMappings'

type Props = {
    goToOnPress: ScreenName
    buttonText: String
}

const CatButton = ({ buttonText, goToOnPress}: Props) => {
    const navigation = useNavigation()

    return(
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(goToOnPress)}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image 
                        source={require('Xmas2020/content/images/black_cats.png')} 
                        style={styles.imgStyles}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </View>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'turquoise',
        height: 75,
        marginHorizontal: 10,
        borderRadius: 50,
        marginVertical: 10
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5
    },
    imgContainer: {
        flex: 1,
    },
    imgStyles: {
        height: 65,
        width: 130,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 22
    }
})

export default CatButton