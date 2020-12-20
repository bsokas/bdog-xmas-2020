import { Home, PictureListProps, Start } from "../screens";

// StackProps contains a param for each of the app screens  
// Undefine signifies the route doesn't take params, Type|undefined means they're optional
export type StackProps = {
    Home: undefined,
    Start: Object|undefined,
    MaxAndObi: PictureListProps,
    Tucson: Object,
    PartyTime: Object|undefined,
    Quotes: undefined,
    Questions: undefined,
    DanceMusic: undefined,
}

export type ScreenName = 'Home' | 'Start' | 'MaxAndObi' | 'Quotes' | 'Tucson' | 'Questions' | 'DanceMusic' | 'PartyTime'

interface ScreenProps {
    name: ScreenName,
    component: React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined,
    children?: Function
}

// NavigationMappings contains ScreenProps for each screen within the app
export const NavigationMappings: ScreenProps[] = [
    {
        name: 'Home',
        component: Home
    },
    {
        name: 'Start',
        component: Start
    }
]