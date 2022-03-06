import {View,Text,StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigation from '../../BottomNavigation/Navigation';
import StatusView from './StatusFootball';
//import StatusView from './StatusView';



// const Container = styled(View)`
//   width: 100%;
//   flex-direction: row;
//   border: 1px solid gray;
  
// `
// const TableButton = styled(View)`
//   width: 80%;
//   height: 55px;
//   flex-direction: row;
//   margin-top: 5px;
  
// `
// const ButtonA=styled(Text)`
//  border: 1px solid gray;
//   flex-direction: row;
//   margin-left: 4.8px;

// `
// const IconA=styled(Icon)`
//   width: 55px;
//   height: 55px;
  
//   position: absolute;
//   top: 10px;

 
  
// `

// const ColumnTime =styled(View)`
//     width: 20%;
//     background-color: green;
//     flex-direction: column;
   
// `
// const TableView=styled(View)`
//   flex-direction: column;
// `
// const TextTime= styled(Text)`
//     text-align: center;
//     margin-top: 38px;
//     color: white;

// `
// const Th=styled(Text)`
//   background-color: red;
//   flex-direction: row;
//   margin-left: 4px;
//   width: 55px;
//   font-size: 22px;
//   font-weight: bold;
  
// `
// const NumberCol=styled(Text)`
//     width: 100%;
//     flex-direction: row;
//     border: 1px solid gray;

//     width: 80%;
//   height: 55px;
//   flex-direction: row;
//   margin-top: 5px;
    
//   border: 1px solid gray;
//   flex-direction: row;
//   margin-left: 4.8px;
    
// `
const Styles=StyleSheet.create({
    Container:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'gray',
        backgroundColor:'red',
    },
    TableButton:{
    
        flexDirection:'column',
        marginTop:5,
        backgroundColor:'pink',
        flex:0.8,
        alignItems:'stretch'
        
    },
    ButtonA:{
        borderWidth:1,
        borderColor:'gray',
        marginLeft:5
    },

    ColumnTime:{
        //backgroundColor:'blue',
        flex:0.2,
    },
    TextTime:{
        textAlign:'center',
        height:55,
        marginBottom:10
    },
    TextTimef:{
        textAlign:'center',
        height:60,
        marginBottom:10
    },
    Th:{
        flexDirection:'row',
        //backgroundColor:'purple',
        marginVertical:5,
        height:55
        
    },
    Thh:{
        flexDirection:'row',
        //backgroundColor:'purple',
        marginVertical:30,
        height:55,
        borderWidth:1,
        borderColor:'gray',
        marginLeft:5
        
    },
   
})
type Props={
    navigation: any;
    route:any;
   
 }

const o_vuong=[
    {
        "name":"ô 1 - dãy 1",
    },
    {
       "name":"ô 2 - dãy 1",
   },
   {
       "name":"ô 3 - dãy 1",
   },
   {
       "name":"ô 4 - dãy 1",
   },
   {
       "name":"ô 5 - dãy 1",
   },
];
  const Linhtinh: React.FC<{navigation:any,route:any}>=({navigation,route})=>{
   
    const hung=route;
    console.warn("ff",hung)
    alert(hung);

     function proFunc(){
       
    }
    return(
        <View>
            <Text></Text>
        </View>
    )
            
   
};

export default Linhtinh;