import React from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity, Button} from 'react-native';

import { Icon } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from './Login';
import SIGNUP from './Register';
import Images from '../../Themes/Images';
const Tab = createMaterialTopTabNavigator();


// const BackBlock = styled(View)`
//     width: 100%;
//     height: 8%;
//     /* background-color: blue; */
//     margin-top:50px;
   
// `
// const ButtonBack=styled(Text)`
  
//    margin-left: 2%;
   
// `
// const Tabs=styled(View)`
//     width: 100%;
//     background: green;
//     height: 55%;
// `
// const Logo =styled(Image)`
//     width: 150px;
//     height: 150px;
//     margin:0px auto;
    
// `
const Styles = StyleSheet.create({
    containerImage:{
            flexDirection:'row',
            justifyContent:'center',
            margin:20
    },
    Logo:{
        width:200,
        height:200
    },
    Form:{
       flexDirection:'row',
       height:'100%',
      
    }

})

const LoginHome: React.FC<{navigation:any}>=({navigation})=>{
    return(
        <View>
            <View  style={Styles.containerImage}>
                <Image source={Images.Logo} style={Styles.Logo} />
                {/* <Button  onPress={()=>{navigation.navigate("SingleFootball")}}  title="LOGIN ➜"/>  */}
            </View>
            <View style={Styles.Form}>
                <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="SIGNUP" component={SIGNUP} />
                </Tab.Navigator>
            </View>
            {/* <View>
               <TouchableOpacity>
               <Text>
                    <Icon   name='chevron-back' type='ionicon' size={35} color='grey' />
                </Text>
               </TouchableOpacity>
            </View> */}
                    {/* <Image  source={Images.Icon_san_dau}/>  */}
           
             
        </View>
    )

}
   
export default LoginHome;