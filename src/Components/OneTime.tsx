import React from "react";
import { View ,Text, Button} from "react-native";

const OneTime: React.FC<{navigation:any}>=({navigation})=>{
    return(
        <View > 
            <Text>S</Text>
            <Button 
                title="Go to Mana"
                onPress={()=>{navigation.navigate('Mana')}}
            ></Button>
        </View>
    )
}
export default OneTime;