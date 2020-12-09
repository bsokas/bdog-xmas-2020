import React from 'react'
import { Button } from 'react-native'

export const AppButton = () => {
    return(
        <Button 
            title="Press Me!" 
            onPress={() => console.log('Pressed the button!')}
            color="cornflowerblue"
        />
    )
}