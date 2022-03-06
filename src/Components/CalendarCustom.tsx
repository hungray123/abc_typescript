import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View,StyleSheet } from 'react-native';
import { Agenda,DateData,AgendaSchedule,AgendaEntry } from "react-native-calendars";
import SingleFootball from "../Screens/UserScreen.tsx/SingleFootball";

const   timeToString=(time: number)=> {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}
const CalendarCustom=()=>{
    const [items,setItems]=useState({});

    const loadItems = (day: DateData) => {
        var items:any = items || {};
    
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            console.log("time=",time)
            const strTime = timeToString(time );
            console.log(strTime)
    
            if (!items[strTime]) {
              items[strTime] = [];
              
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150)),
                  day: strTime
                });
              }
            }
        }
        const newItems:AgendaSchedule= {};
        Object.keys(items).filter(key => {
          newItems[key] = items[key];
        });
        setItems(newItems);
      }, 1000);
    }
    const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
        const fontSize = isFirst ? 16 : 14;
        const color = isFirst ? 'black' : '#43515c';
    
        return (
          <TouchableOpacity
            // testID={testIDs.agenda.ITEM}
            style={[styles.item, {height: reservation.height}]}
            onPress={() => Alert.alert(reservation.name)}
          >
            <Text style={{fontSize, color}}>{reservation.name}</Text>
            <View>
            {/* <Text>342423</Text> */}
            </View>
          </TouchableOpacity>
          
        );
      }
    // const renderHeader=(date)=>{
    //     return (<Text>{date.getMonth()}</Text>)
    // }
    const [ currentDate, setCurrentDate]=React.useState('');
    //const [ lastDayOfMonth, setLastDayOfMonth]=React.useState('');
    const [ FiveAfterDay, setFiveAfterDay]=React.useState('');
   
    useEffect(()=>{
      
      var date = new Date().getDate() //current date
      var month =new Date().getMonth() + 1
      var year = new Date().getFullYear()
      //tháng nhỏ hơn 10 thì thêm 0 đằng trước
      var months=''
      if(month<10){
           months='0'+month
      }else{
        months=month+''
      }
      setCurrentDate(
        year + '-'+ months + '-' + date
      )

      //sau ngày hiện tại +5 ngày thì các ngày sau đó không đặt được sân, ngày sẽ bị ẩn
      var today = new Date().getDate();
      var FiveAfterDay= today+5;
      setFiveAfterDay(year + '-'+ months +'-'+FiveAfterDay)

      // ngày cuối cùng của tháng đó
      //var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
      //setLastDayOfMonth(lastDayOfMonth+'')
    },[])
   
  
     
  
    //console.warn(FiveAfterDay);
    // var aaa:string =currentDate;
    // alert(aaa)
   
    
    return(
        <View style={{flex:1}}>
            {/* <View style={{marginTop:30}}><Text>12323213</Text></View> */}
        <Agenda 
        style={{marginBottom:30}}
        // testID={testIDs.agenda.CONTAINER}
        onPressArrowRight={onPres}
        items={items}
        onRefresh={() => console.log('refreshing...')}
        loadItemsForMonth={loadItems}
        // renderHeader={renderHeader}
        // disableMonthChange={true}
        // current={currentDate}
        // selected={'2022-02-19'}
        // onDayPress = {day => {
        //   console.log ('ngày được nhấn');
        // }}
        // onDayChange = {day => {
        //   console.log ('ngày đã thay đổi');
        // }}
        // current={new Date()}
        // hideKnob={true}
        // showClosingKnob={false}
        //  renderItem={renderItem}
         minDate={currentDate}
         maxDate={FiveAfterDay}
        //  selected={FiveAfterDay}
        //  renderKnob={() => {
        //   return <View />;
        // }}
        // renderEmptyDate={this.renderEmptyDate}
        // rowHasChanged={this.rowHasChanged}
        // showClosingKnob={true}
        //markingType={'period'}
        // markedDates={{
        //     currentDate: {marked: true, dotColor: 'red', activeOpacity: .8},
        //     '2022-05-19': {disabled: true, disableTouchEvent: true}
        //   }}
         
        />

        </View>
    )

};
const styles = StyleSheet.create({
    item: {
      backgroundColor: 'white',
      flex: 1,
      flexDirection:'row',
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
    emptyDate: {
      height: 15,
      flex: 1,
      paddingTop: 30,
      flexDirection:'row',
    }
  });
export default CalendarCustom;