import React from 'react'
import {StyleSheet, Button,Text,View,TouchableOpacity} from 'react-native'


const styles=StyleSheet.create({
    ButtonWrap:{
         backgroundColor:'green',
         width: '50%',
         

    },
    ButtonText:{
        //fontFamily:'NunitoSasn-Black',
        fontSize:13,
        textAlign:'center',
        color: 'white',
        backgroundColor:'red',
        borderRadius:20,
        padding:10,
        marginVertical:20,
        marginStart:10,
        marginEnd:10
        
    }
})

type Props={
    title:string,
    navigation:any
}
const ButtonLogin: React.FC<Props>=({title,navigation}:Props)=>{

    return(
        <TouchableOpacity onPress={()=>{navigation.navigate(View)}}>
            <View>
                <Text style={styles.ButtonText} >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ButtonLogin;