import React from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity, Button} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Icon } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Images from '../../Themes/Images';
import SingleFootball from './SingleFootball';
import { Agenda } from 'react-native-calendars';
const Tab = createMaterialTopTabNavigator();


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
       height:'78%'
       
      
    }

})

const HomeBooking: React.FC<{navigation:any}>=({navigation})=>{
    const [ currentDate, setCurrentDate]=React.useState('');
    const [date,setDate]=React.useState(currentDate);
 
    React.useEffect(()=>{
      var date = new Date().getDate() //current date
      var month =new Date().getMonth() + 1
      //var year = new Date().getFullYear()

      setCurrentDate(
         date +''
      )
     
    },[])
    return(
        <View style={{flex:1,zIndex:2}}>
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
                    format="DD"
                    minDate={currentDate}
                   // maxDate="06-01"
                   // confirmBtnText="Confirm"
                   // cancelBtnText="Cancel"
                    customStyles={{
                    // dateIcon: {
                    //    //backgroundColor:'red'
                    // },
                    dateInput: {borderWidth:0,}
                  
                    }}
                    onDateChange={(date:any) => {setDate(date)}}
                />
                </View>
            </View> */}
           
           <View style={{flex:1,height:'100%',zIndex:5}}>
           <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:10,marginTop:25}}>
                    <Icon  color="#696969"  name='menu'  type='ionicons' size={40} />
                    <Text style={{fontWeight:'bold',fontSize:18,color:'#696969'}}>Sân thể thao Sport 365</Text>
                </View>
              
              
           <Agenda
           current={currentDate}
           theme={{ agendaDayTextColor: 'yellow', agendaKnobColor: '#696969',calendarBackground:'white'}}
           />
           </View>
          

            

            <View style={Styles.Form}>
                <Tab.Navigator>
                <Tab.Screen name="Sân 7" key={1} component={SingleFootball} />
                <Tab.Screen name="Sân 11" key={2} component={View} />
                </Tab.Navigator>
            </View>
        </View>
    )

}
   
export default HomeBooking;