import React from "react";
import { View ,Text, Button} from "react-native";

const OneTime: React.FC<{navigation:any}>=({navigation})=>{
    return(
        <View  style={{justifyContent:'center',flexDirection:'column-reverse',alignItems:'center',height:400}}> 
            <Text>S</Text>
            <Button 
                title="Go to Mana"
                onPress={()=>{navigation.navigate(View)}}
            ></Button>
        </View>
    )
}
export default OneTime;