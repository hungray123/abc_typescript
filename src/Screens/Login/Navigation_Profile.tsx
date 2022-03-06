import { NavigationContainer } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";


const Stack = createStackNavigator();
const Navigation_Profile:  React.FC<{navigation:any}>=({navigation})=>{
    return(
       
           <Stack.Navigator  >
                <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
                <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/>
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
                {/* <Stack.Screen name="SingleFootball" component={SingleFootball} options={{headerShown: false}} />  */}
                {/* <Stack.Screen name="Navigation" component={Navigation} /> */}
                {/* <Stack.Screen name="DetailsFootball" component={DetailsFootball}  options={{headerShown: false}}/> */}
                {/* <Stack.Screen name="SingleFootballBB" component={SingleFootball} />  */}
                {/* <Stack.Screen name="NavigationBack" component={Navigation} /> */}
                {/* <Stack.Screen name="SingleFootball" component={SingleFootball} />  */}
                {/* <Stack.Screen name="TabViewExample" component={TabViewExample} /> */}
            </Stack.Navigator>
      
    )
}
export default Navigation_Profile;