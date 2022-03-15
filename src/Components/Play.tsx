import { NavigationContainer } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Button, StatusBar, View } from "react-native";
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
import AdScreen from "./AdScreen";
import FindPitch from "../Screens/FindPitch";
import BookFootballPitch from "../Screens/UserScreen.tsx/BookFootballPitch";
import PaymentScreen from "../Screens/UserScreen.tsx/PaymentScreen";
import Navigation from "../BottomNavigation/Navigation";

const Stack = createStackNavigator();
const Play:  React.FC<{navigation:any}>=({navigation})=>{
    return(
       
           <Stack.Navigator  >
                <Stack.Screen name="home" component={Navigation} options={{headerShown: false}}/>
                <Stack.Screen name="home2" component={FindPitch} options={{headerShown: false}}/>
                 {/* có cũng đc và ko có cũng đc FindPitch */}
                <Stack.Screen name="BookFootballPitch"  component={BookFootballPitch} options={{title:"Sân cỏ VH"}} />
                {/* <Stack.Screen name="SingleFootball" component={SingleFootball} options={{headerShown: false}} />  */}
                {/* <Stack.Screen name="Navigation" component={Navigation} /> */}
                <Stack.Screen name="DetailsFootball" component={DetailsFootball}  
                    
                options={{
                        headerShown: false,
                        headerStyle:{
                            backgroundColor:'green'
                        }
                    }

                }
                />
                <Stack.Screen name="PaymentScreen" component={PaymentScreen}
                 options={{
                    headerShown: true,
                    headerStyle:{
                        backgroundColor:'green',
                       
                    },
                    title:"Thanh Toán",
                    headerTintColor: '#fff'
                    
                }

            }
                
                /> 
                {/* <Stack.Screen name="NavigationBack" component={Navigation} /> */}
                {/* <Stack.Screen name="SingleFootball" component={SingleFootball} />  */}
                {/* <Stack.Screen name="TabViewExample" component={TabViewExample} /> */}
            </Stack.Navigator>
      
    )
}
export default Play;