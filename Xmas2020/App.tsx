import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
} from 'react-native'

import { Home, Start } from './components/screens'
import { StackProps, NavigationMappings } from './components/constants/stackMappings'

const Stack = createStackNavigator<StackProps>()

const App = () => (
    <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="purple"/>
        <SafeAreaView>
            <View style={styles.appView}>
                <Stack.Navigator initialRouteName="Home">
                    {/* TODO figure out these mappings */}
                    {/* {NavigationMappings.map(screenProps => 
                        <Stack.Screen name={screenProps.name} component={Home} />)
                    } */}
                    <Stack.Screen name="Home" component={Home} key="home"/>
                    <Stack.Screen name="Start" component={Start} key="start"/>
                </Stack.Navigator>
            </View>
        </SafeAreaView>
    </NavigationContainer>
)

export default App

const styles = StyleSheet.create({
    appView: {
        backgroundColor: 'aliceblue',
        height: '100%',
        width: '100%'
    },
})