import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const listTab=[
    {
        status:'Five'
    },
    {
        status:'Seven'
    }
];
const Styles=StyleSheet.create({
    Container:{
       flex:1,
       paddingHorizontal:10,
    },
    listTab:{
        flex:1,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'center',
        //alignSelf:'center'
    },
    btnTab:{
        width: Dimensions.get('window').width/2.5,
        borderWidth:0.5,
        borderColor:'grey',
        padding:10,
       // backgroundColor: 'red',
    },
    textTab:{
        fontSize:16,
        textAlign:'center',
        ///color:'blue'
    },
    btnTabActive:{
        backgroundColor:'green'
    },
    textTabActive:{
        color:'#fff'
    }
})

const BookFootball=()=>{
    const [status ,setStatus]=useState('Five')
    const setStatusFilter = (status) =>{
        setStatus(status)
    }
    return(
   
        <View style={Styles.listTab}>
            {
                listTab.map((item,index)=>(
                    <TouchableOpacity style={[Styles.btnTab,status === item.status && Styles.btnTabActive]}
                                        onPress={()=>setStatusFilter(item.status)}>
                        <Text style={Styles.textTab }>
                        {item.status}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}
export default  BookFootball;