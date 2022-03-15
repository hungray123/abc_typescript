import {View,Text,StyleSheet, Button,Platform} from 'react-native';
import React, { useEffect, useState, } from 'react';
//import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigation from '../../BottomNavigation/Navigation';
import StatusView from './StatusFootball';
//import StatusView from './StatusView';
import {Icon} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from 'react-native-datepicker';

const Styles=StyleSheet.create({
    Container:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'gray',
        backgroundColor:'red',
        marginTop:6
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
        marginLeft:5,
        width: 46,
        height:45,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
        
    },

    ColumnTime:{
        //backgroundColor:'blue',
        flex:0.2,
    },
    TextTime:{
        textAlign:'center',
        height:45,
        marginBottom:8
    },
    TextTimef:{
        textAlign:'center',
        height:45,
        marginBottom:10
    },
    Th:{
        flexDirection:'row',
        //backgroundColor:'purple',
        marginVertical:1,
        height:50,
       
        
    },
    Th2:{
        flexDirection:'row',
        //backgroundColor:'purple',
        marginVertical:5,
        height:50,
        marginTop:20
        
    },
    Thh:{
        borderWidth:1,
        borderColor:'gray',
        marginLeft:5,
        width: 46,
        height:45,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
        
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
   {
    "name":"ô 6 - dãy 1",
   },
];
const o_vuong2=[
    {
        "name":"ô 1 - dãy 2",
    },
    {
       "name":"ô 2 - dãy 2",
   },
   {
       "name":"ô 3 - dãy 2",
   },
   {
       "name":"ô 4 - dãy 2",
   },
   {
       "name":"ô 5 - dãy 2",
   },
   {
    "name":"ô 6 - dãy 2",
   },
];
const o_vuong3=[
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
   {
    "name":"ô 6 - dãy 1",
   },
];
const o_vuong4=[
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
   {
    "name":"ô 6 - dãy 1",
   },
];
  const SingleFootball: React.FC<{navigation:any,route:any}>=({navigation,route})=>{
  
    // const [ currentDate, setCurrentDate]=useState('');
    // const [date,setDate]=useState(currentDate);
   

    // useEffect(()=>{
    //     var date = new Date().getDate() //current date
    //     var month =new Date().getMonth() + 1
    //     //var year = new Date().getFullYear()

    //     setCurrentDate(
    //         month + '-' + date 
    //     )
       
    // },[])
    React.useEffect(()=>{
        if(route.params?.hung){
            console.warn(route.params?.hung)
        }
    },[route.params?.hung])
    return(
        <View>
            {/* Header && Calendar */}
            {/* <View style={{height:'12%',flexDirection:'row',alignItems:'center'}} >
                <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:10}}>
                    <Icon   name='menu'  type='ionicons' size={40} />
                    <Text style={{fontWeight:'bold',fontSize:18}}>Sân thể thao Sport 365</Text>
                </View>
                <View style={{alignSelf:'flex-end',borderWidth:1,borderColor:'gray',borderRadius:8,backgroundColor:'orange',marginLeft:40}}>
                <DatePicker
                    style={{width: 100,color:'red'}}
                    date={date}
                    mode="date"
                    //placeholder="select date"
                    showIcon={true}
                    format="MM-DD"
                    minDate={currentDate}
                   // maxDate="06-01"
                   // confirmBtnText="Confirm"
                   // cancelBtnText="Cancel"
                    customStyles={{
                    // dateIcon: {
                    //    //backgroundColor:'red'
                    // },
                    dateInput: {   
                      borderWidth:0,
                     }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date:any) => {setDate(date)}}
                />
                </View>
            </View> */}
           {/* Header && Calendar */}

            <View style={Styles.Container}>
                <View  style={Styles.ColumnTime}>
            
                    <Text style={{textAlign:'center',fontWeight:'bold',margin:15}}>Sân</Text>
                    <Text style={Styles.TextTime}>6:00</Text>
                    <Text style={Styles.TextTime}>7:30</Text>
                    <Text style={Styles.TextTime}>9:00</Text>
                    <Text style={Styles.TextTime}>10:30</Text>
                    <Text style={{textAlign:'center',color:'red'}}>12:00</Text>

                    <Text style={{height:50,color:'white',textAlign:'center'}}>15:00</Text>
                    <Text style={Styles.TextTimef}>16:30</Text>
                    <Text style={Styles.TextTimef}>18:00</Text>
                    <Text style={Styles.TextTimef}>19:30</Text>
                    {/* <Text style={Styles.TextTimef}>21:30</Text> */}
                  
                </View>
                
                <View style={Styles.TableButton}>

                    <View style={Styles.Th}>
                      
                      <View style={styles.Th_Wrap} ><Text style={styles.Th}>1</Text></View>
                      <View style={styles.Th_Wrap} ><Text style={styles.Th}>2</Text></View>
                      <View style={styles.Th_Wrap} ><Text style={styles.Th}>3</Text></View>
                      <View style={styles.Th_Wrap} ><Text style={styles.Th}>4</Text></View>
                      <View style={styles.Th_Wrap} ><Text style={styles.Th}>5</Text></View>
                      <View style={styles.Th_Wrap} ><Text style={styles.Th}>6</Text></View>
                     
                    </View>
                    {/* <Text>ix={ix}</Text> */}
                    <View style={Styles.Th}>
                        {
                            o_vuong.map((item,index)=>(
                                                                                        //em truyền cái id,với cái hàm callback
                              <View style={Styles.ButtonA}>
                                <Text  key={index} onPress={()=>{navigation.navigate('DetailsFootball',{id:index+1})}}>
                                 {
                                     route.params?.hung==index+1?  <Icon
                                     //reverse
                                     name='football-sharp'
                                     style={styles.IconPending}
                                     type='ionicon'
                                     color='yellow'
                                     size={30}
                                   />:
                                      <Icon  style={styles.Icon}  name='add-circle-outline'  type='ionicons' size={30} />
                                 }
                                </Text>
                              </View>
                            ))
                        }
                    </View>
                    <View style={Styles.Th}>
                        {
                            o_vuong2.map((item,index)=>(
                                                                                        //em truyền cái id,với cái hàm callback
                              <View style={Styles.ButtonA}>
                                <Text  key={index} onPress={()=>{navigation.navigate('DetailsFootball',{id:index+6})}}>
                                 {
                                     route.params?.hung==index+6?  <Icon
                                     //reverse
                                     name='football-sharp'
                                     style={styles.IconPending}
                                     type='ionicon'
                                     color='yellow'
                                     size={30}
                                   />:
                                      <Icon  style={styles.Icon}  name='add-circle-outline'  type='ionicons' size={30} />
                                 }
                                </Text>
                              </View>
                            ))
                        }
                    </View>
                    <View style={Styles.Th}>
                        {
                            o_vuong3.map((item,index)=>(
                                                                                        //em truyền cái id,với cái hàm callback
                              <View style={Styles.ButtonA}>
                                <Text  key={index} onPress={()=>{navigation.navigate('DetailsFootball',{id:index+12})}}>
                                 {
                                     route.params?.hung==index+12?  <Icon
                                     //reverse
                                     name='football-sharp'
                                     style={styles.IconPending}
                                     type='ionicon'
                                     color='yellow'
                                     size={30}
                                   />:
                                      <Icon  style={styles.Icon}  name='add-circle-outline'  type='ionicons' size={30} />
                                 }
                                </Text>
                              </View>
                            ))
                        }
                    </View>
                    {/* <View style={Styles.Th}>
                        {
                            o_vuong4.map((item,index)=>(
                                                                                        //em truyền cái id,với cái hàm callback
                              <View style={Styles.ButtonA}>
                                <Text  key={index} onPress={()=>{navigation.navigate('DetailsFootball',{id:index+24})}}>
                                 {
                                     route.params?.hung==index+24?  <Icon
                                     //reverse
                                     name='football-sharp'
                                     style={styles.IconPending}
                                     type='ionicon'
                                     color='yellow'
                                     size={30}
                                   />:
                                      <Icon  style={styles.Icon}  name='add-circle-outline'  type='ionicons' size={30} />
                                 }
                                </Text>
                              </View>
                            ))
                        }
                    </View> */}
                  
                    {/* <View style={Styles.Th}>    
                            <Text style={Styles.ButtonA} onPress={()=>{navigation.navigate('DetaisFootball',{id:4})}}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>      
                        </View> */}

                        {/* <View style={Styles.Th}>   
                             <Text style={Styles.ButtonA} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />  
                                </TouchableOpacity>
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>      
                    </View>
                    <View style={Styles.Th}>   
                             <Text style={Styles.ButtonA} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />  
                                </TouchableOpacity>
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>      
                    </View>
                    <View style={Styles.Th}>   
                             <Text style={Styles.ButtonA} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon} name='add-circle-outline'  size={35} />  
                                </TouchableOpacity>
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>      
                    </View> */}
                    
                        {/*Afternoon*/}
                        <View style={Styles.Th2}>
                        {
                            o_vuong4.map((item,index)=>(
                                                                                        //em truyền cái id,với cái hàm callback
                              <View style={Styles.Thh}>
                                <Text  key={index} onPress={()=>{navigation.navigate('DetailsFootball',{id:index+24})}}>
                                 {
                                     route.params?.hung==index+24?  <Icon
                                     //reverse
                                     name='football-sharp'
                                     style={styles.IconPending}
                                     type='ionicon'
                                     color='yellow'
                                     size={30}
                                   />:
                                      <Icon  style={styles.Icon}  name='add-circle-outline'  type='ionicons' size={30} />
                                 }
                                </Text>
                              </View>
                            ))
                        }
                    </View>
                    <View style={Styles.Th}>
                        {
                            o_vuong2.map((item,index)=>(
                                                                                        //em truyền cái id,với cái hàm callback
                              <View style={Styles.Thh}>
                                <Text  key={index} onPress={()=>{navigation.navigate('DetailsFootball',{id:index+24})}}>
                                 {
                                     route.params?.hung==index+24?  <Icon
                                     //reverse
                                     name='football-sharp'
                                     style={styles.IconPending}
                                     type='ionicon'
                                     color='yellow'
                                     size={30}
                                   />:
                                      <Icon  style={styles.Icon}  name='add-circle-outline'  type='ionicons' size={30} />
                                 }
                                </Text>
                              </View>
                            ))
                        }
                    </View>
                    <View style={Styles.Th}>
                        {
                            o_vuong4.map((item,index)=>(
                                                                                        //em truyền cái id,với cái hàm callback
                              <View style={Styles.Thh}>
                                <Text  key={index} onPress={()=>{navigation.navigate('DetailsFootball',{id:index+24})}}>
                                 {
                                     route.params?.hung==index+24?  <Icon
                                     //reverse
                                     name='football-sharp'
                                     style={styles.IconPending}
                                     type='ionicon'
                                     color='yellow'
                                     size={30}
                                   />:
                                      <Icon  style={styles.Icon}  name='add-circle-outline'  type='ionicons' size={30} />
                                 }
                                </Text>
                              </View>
                            ))
                        }
                    </View>
                    <View style={Styles.Th}>
                        {
                            o_vuong4.map((item,index)=>(
                                                                                        //em truyền cái id,với cái hàm callback
                              <View style={Styles.Thh}>
                                <Text  key={index} onPress={()=>{navigation.navigate('DetailsFootball',{id:index+24})}}>
                                 {
                                     route.params?.hung==index+24?  <Icon
                                     //reverse
                                     name='football-sharp'
                                     style={styles.IconPending}
                                     type='ionicon'
                                     color='yellow'
                                     size={30}
                                   />:
                                      <Icon  style={styles.Icon}  name='add-circle-outline'  type='ionicons' size={30} />
                                 }
                                </Text>
                              </View>
                            ))
                        }
                    </View>
                    <View style={Styles.Th}>
                        {
                            o_vuong4.map((item,index)=>(
                                                                                        //em truyền cái id,với cái hàm callback
                              <View style={Styles.Thh}>
                                <Text  key={index} onPress={()=>{navigation.navigate('DetailsFootball',{id:index+24})}}>
                                 {
                                     route.params?.hung==index+24?  <Icon
                                     //reverse
                                     name='football-sharp'
                                     style={styles.IconPending}
                                     type='ionicon'
                                     color='yellow'
                                     size={30}
                                   />:
                                      <Icon  style={styles.Icon}  name='add-circle-outline'  type='ionicons' size={30} />
                                 }
                                </Text>
                              </View>
                            ))
                        }
                    </View>

                        {/* <View style={Styles.Th}>   
                             <Text style={Styles.Thh} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon}  name='add-circle-outline'  size={35} />  
                                </TouchableOpacity>
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>      
                    </View>
                    <View style={Styles.Th}>   
                             <Text style={Styles.Thh} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />  
                                </TouchableOpacity>
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>      
                    </View>
                    <View style={Styles.Th}>   
                             <Text style={Styles.Thh} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />  
                                </TouchableOpacity>
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} />
                            </Text>      
                    </View>
                    <View style={Styles.Th}>   
                             <Text style={Styles.Thh} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />  
                                </TouchableOpacity>
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35}  />
                            </Text>      
                    </View> */}
                </View>
            </View>
            <StatusView/>
        </View>
    )
};
const styles =StyleSheet.create({
   Icon:{
     
      // backgroundColor:'red',
     //marginHorizontal:2,
    // marginVertical:2,
      //paddingHorizontal:10
    //paddingHorizontal:8,
   // paddingVertical:8,
    justifyContent:'center',
    flexDirection:'row-reverse',
    alignItems:'center',
    //backgroundColor:'red'
      
   },
   IconPending:{
    //paddingHorizontal:5,
    //paddingVertical:5,
   // justifyContent:'center',
    //color:'red'

    
   },

   Th:{
     width: 35,
     height: 35,
     textAlign:'center',
     fontWeight:'bold',
     fontSize:22,
      backgroundColor:'purple',
      borderWidth:1,
      borderColor:'purple',
      borderRadius:30,
      color: 'white',
      padding:2,
      zIndex:1
   },
   Th_Wrap:{
    backgroundColor:'green',
    marginLeft:5,
    width: 46,
    height:45,
    justifyContent:'center',
    alignItems:'center',
  
  }
  
})


export default SingleFootball;