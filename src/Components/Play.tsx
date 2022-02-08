import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Button, View } from "react-native";


const Play:  React.FC<{navigation:any}>=({navigation})=>{
    return(
        <View>
            <Button
                title="Click Now"
                onPress={()=>{navigation.navigate('LoginHome')}}
            ></Button>
        </View>
    )
}
export default Play;