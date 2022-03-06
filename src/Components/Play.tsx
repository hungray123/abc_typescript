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
import DatepickerLight from "./DatepickerLight";
import DatePicker from "./DatePicker";
import CalendarCustom from "./CalendarCustom";
import CalendarScroll from "./CalendaScroll";
import Cale from "./Calenda";

const Stack = createStackNavigator();
const Play:  React.FC<{navigation:any}>=({navigation})=>{
    return(
       
           <Stack.Navigator  >
                <Stack.Screen name="home" component={CalendarScroll} options={{headerShown: false}}/>
                {/* <Stack.Screen name="LoginHome" component={LoginHome} /> */}
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
export default Play;