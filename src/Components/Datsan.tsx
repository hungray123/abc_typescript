import { NavigationContainer } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Button, View } from "react-native";
import DetailsFootball from "../Screens/DetailsFootball";
import LoginHome from "../Screens/Login/LoginHome";
import TabViewExample from "../Screens/UserScreen.tsx";
import SingleFootball from "../Screens/UserScreen.tsx/SingleFootball";
import { createStackNavigator } from "@react-navigation/stack";
import OneTime from "./OneTime";
import HomeBooking from "../Screens/UserScreen.tsx/HomeBooking";
import Navigation from "../BottomNavigation/Navigation";
import FindPitch from "../Screens/FindPitch";
const Stack = createStackNavigator();
const Datsan:  React.FC<{navigation:any}>=({navigation})=>{
    return(
       
           <Stack.Navigator  >
               

                 <Stack.Screen name="FindPitch" component={FindPitch}  options={{headerShown: false}}/>

                 <Stack.Screen name="HomeBooking" component={HomeBooking}  options={{headerShown: false}}/>
                {/* <Stack.Screen name="SingleFootball" component={SingleFootball} options={{headerShown: false}} />  */}
                {/* <Stack.Screen name="Navigation" component={Navigation} /> */}
                {/* <Stack.Screen name="SingleFootballBB" component={SingleFootball} />  */}
                {/* <Stack.Screen name="NavigationBack" component={Navigation} /> */}
                {/* <Stack.Screen name="SingleFootball" component={SingleFootball} />  */}
                <Stack.Screen name="DetailsFootball" component={DetailsFootball} options={{headerShown: false}} />
                
            </Stack.Navigator>
      
    )
}
export default Datsan;