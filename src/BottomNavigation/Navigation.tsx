import { Image, Text, View } from 'react-native';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Images from '../Themes/Images';
const Tab= createBottomTabNavigator();

const Navigation: React.FC=()=>{
    return(
         <NavigationContainer>
             <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor: '#e91e63'}}>
                <Tab.Screen
                        name="Home"
                        options={{tabBarIcon:()=><TouchableOpacity><Text><Icon name='home' type='material-icons' size={30}/></Text></TouchableOpacity>}}
                        component={View}/>
                <Tab.Screen 
                    name="Đặt sân" 
                    options={{tabBarIcon:()=>
                        <Image source={Images.Icon_san_dau}   style={{width:30,height:30}} />
                        }}
                    component={View}/>
                 <Tab.Screen 
                    name="Cửa hàng" 
                    options={{tabBarIcon:()=><TouchableOpacity><Text><Icon name='store' type='material-icons' size={30} color='blue'/></Text></TouchableOpacity>}}
                    component={View}/>
                     <Tab.Screen  
                    name="Cá nhân" 
                    options={{tabBarIcon:()=><TouchableOpacity><Text><Icon name='person' type='material-icons' size={30} color='pink'/></Text></TouchableOpacity>}}
                    component={View}/>
             </Tab.Navigator>
         </NavigationContainer>
    )
}

export default Navigation;