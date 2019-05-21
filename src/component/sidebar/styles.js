import { Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
export const styles = {
    Container:{
        height:height/4,
        
    },
    contnt:{
       
        height:height*0.75
    },
    bodyBorder:{
        borderBottomWidth:0
    }

}