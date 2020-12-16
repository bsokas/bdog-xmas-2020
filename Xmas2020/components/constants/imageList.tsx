import { ScreenName } from '../constants/stackMappings'
import { Image, ImageProps } from 'react-native'

const IMAGE_ROOT = 'Xmas2020/content/images'

export interface ImageProfile {
    path: Object
    isExternal: boolean
}

const MaxAndObi: ImageProfile[] = [
    {
        path: require('Xmas2020/content/images/maxandobi/image_1.jpg'),
        isExternal: false
    },
    {
        path: require('Xmas2020/content/images/maxandobi/image_2.jpg'),
        isExternal: false
    },
    {
        path: require('Xmas2020/content/images/maxandobi/image_3.jpg'),
        isExternal: false
    },
    {
        path: require('Xmas2020/content/images/maxandobi/image_4.jpg'),
        isExternal: false
    },
    {
        path: require('Xmas2020/content/images/maxandobi/image_5.jpg'),
        isExternal: false
    }
]

const Tucson: ImageProfile[] = [
    {
        path: {uri: 'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/c/f5/cf5805a1-57fa-5e79-95e2-ef6d9c1866f6/5d3789be23f78.image.jpg?resize=1200%2C623'},
        isExternal: true
    },
    {
        path: {uri: 'https://cdn.britannica.com/35/191335-050-8306459F/Tucson-Arizona.jpg'},
        isExternal: true
    },
    {
        path: {uri: 'https://www.nps.gov/common/uploads/grid_builder/orpi/crop16_9/F505B662-1DD8-B71B-0B69B1A3BD3FBB5D.jpg?width=950&quality=90&mode=crop'},
        isExternal: true
    },
    {
        path: {uri: 'https://s3-ca-central-1.amazonaws.com/quincy-network/wp-content/uploads/sites/7/2018/10/17124141/Sunrise-Mount-Lemmon.jpg'},
        isExternal: true
    },
    {
        path: {uri: 'https://img.budgettravel.com/_ampArticle/tucson.jpg?mtime=20191018154351'},
        isExternal: true
    },
    {
        path: {uri: 'https://www.visitarizona.com/imager/s3_us-west-1_amazonaws_com/aot-2020/images/Hero-Images/nn0704m4bupf0fqgnvaj_91852798b59be8b28fc00edfe4aec23a.jpg'},
        isExternal: true
    }
    
]

const ImageMappings = new Map<ScreenName, ImageProfile[]>([
    ["MaxAndObi", MaxAndObi],
    ["Tucson", Tucson]
])

export default ImageMappings