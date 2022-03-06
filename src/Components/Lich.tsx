import React, { useState,useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
} from 'react-native';
import Images from '../Themes/Images';
export type Props = {
    name: string;
    date: number;
  };
export const Lich: React.FC<Props>=({name,})=>{

    let date = new Date().getDate();//5
    let month =new Date().getMonth()+1;
    console.log("thang "+month)
   
    const [currentDate,setCurrentDate]=useState(date);
 
    const onTomorrow =()=>{
        setCurrentDate(currentDate+1);
    }
    
    var today = new Date();
    var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
    console.log(lastDayOfMonth)

    const onYesterday =()=>{
        setCurrentDate(
            currentDate
        );

    }
    console.log(currentDate)
    
   

    return(
        <View style={{flexDirection:'row',margin:5}} >
            <TouchableOpacity onPress={onYesterday} >
            <Image source={Images.left} style={{width:30,height:30}}/>
            </TouchableOpacity>
            <Text style={{fontSize:20,padding:5}}>{currentDate-1}</Text>
            <Text style={{fontSize:25,borderWidth:2,borderColor:'blue',borderRadius:5,paddingHorizontal:5}}>{currentDate}</Text>
            <Text style={{fontSize:20,padding:5}}>{currentDate+1}</Text>
            <TouchableOpacity onPress={onTomorrow} >
            <Image source={Images.right} style={{width:30,height:30}}/>
            </TouchableOpacity>
        </View>
    )
}