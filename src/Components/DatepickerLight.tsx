import React, { useEffect, useMemo, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet , Image} from "react-native";
import moment from "moment";

const days = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//defaultProps
interface Props{
    iconSize: 30,
    dateFormat: "D",
    pressedColor: "#fff",
    depressedColor: "#7d7c7b",
}
export type PropTypes={
    iconSize:number;
    dateFormat:string;
    pressedColor:string;
    depressedColor:string;
    selected:Function
 
}

const DatepickerLight : React.FC<PropTypes> =({
    iconSize= 30,
    dateFormat= "D",
    pressedColor= "#fff",
    depressedColor= "#7d7c7b",
    selected
})=>{
    const [arrowCount,setArrowCount]= useState(0);
    const [weekObject,setWeekObject]= React.useState([]);
    const [selectedDate,setSelectedDate]= useState({
        day:null,
        date:null
    });
    
    useEffect(()=>{

        DateCreator();
       
    },[]);
    //useMemo giúp kiểm soát việc render dư thừa = shouldComponentUpdate
    const UsingMemo = ({ nextProps,nextState }:any) =>{
        
        const Memo= useMemo(
           ()=>  weekObject !=nextState || selectedDate !=nextState,
           [nextState]
        ); 
    };
    const DateCreator =()=>{
        const dayArray:any =days;
        let weekObject:any = [days];
        weekObject[arrowCount]=[];
        let todaysDateIndex=dayArray.indexOf(moment().format("ddd"));
        for (let day in dayArray){
            let selectedWeekDaySet = day +  todaysDateIndex + arrowCount * 7
            let calenderDay = dayArray[day];
            let dateObject ={
                day: calenderDay,
                date: moment()
                    .add(selectedWeekDaySet,"day")
                    .format(dateFormat),
                monthYear:moment()
                    .add(selectedWeekDaySet,"day")
                    .format("MMMM YYYY")
            }
            weekObject[arrowCount][day]==dateObject;
        } 
        setWeekObject
    };
    const handlePress = (date:any) =>{
        if(selectedDate.day==date.day && selectedDate.date==date.date){
            setSelectedDate({day: null, date: null })
        }else{
            let dates = {
                day: date.day,
                date: date.date
            }
            setSelectedDate({
                day: date.day,
                date:date.date,
               
            }, selected(dates))
            //thiếu
           
        }
    }
    const handleArrowChange =(time:any)=>{
        setArrowCount(arrowCount-time),
        ()=>{
            DateCreator();
        };
    };
    const handleMonthYearComponent =()=>{
        if(weekObject.length>0){
            return <Text>{weekObject[arrowCount][3]}</Text>
        }
    }
    const handleDateComponentDisplay = () => {
        return weekObject[arrowCount].map((date:any, index:any) => {
          let isPressed =
            selectedDate.day == date.day &&
            selectedDate.date == date.date;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(date)}
              style={Styles.dateComponentDateTouchable}
              >
              <Text style={{ color: isPressed ? pressedColor  : depressedColor  }}>
                {date.day}
              </Text>
              <Text style={{ color: isPressed ? pressedColor : depressedColor  }}>
                {date.date}
              </Text>
            </TouchableOpacity>
          );
        });
    };
    return(
        <View style={Styles.dateComponentView}>
            {handleMonthYearComponent()}
            <View style={Styles.dateComponentDateView}>
            <Text />
            <TouchableOpacity onPress={() => handleArrowChange(1)}>
                <Image style={{width: iconSize, height: iconSize}} 
                source={require('../Themes/left-arrow.png')}
                />
            </TouchableOpacity>
            {weekObject.length != 0 &&
                handleDateComponentDisplay()}
            <TouchableOpacity onPress={() => handleArrowChange(-1)}>
            <Image style={{width:iconSize, height: iconSize}} 
                source={require('../Themes/right-arrow.png')} />
            </TouchableOpacity>
            </View>
      </View>
    );
    
};


const Styles = StyleSheet.create({
    dateComponentView: {
      flex: 1, flexDirection: "column" , alignItems: 'center'
    },
    dateComponentYearText: {
      color: '#fff', fontSize: 20
    },
    dateComponentDateTouchable: {
      flex: 1,
      flexDirection: "column",
      color: "#7d7c7b",
      alignItems: "center"
    },
    dateComponentDateView: {
      flex: 1, flexDirection: "row", marginTop: 10
    }
  });
export default DatepickerLight;
