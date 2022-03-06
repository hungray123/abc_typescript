import React, { useState } from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Image} from 'react-native';

export type Props={
    children: number,
    state: string,
    marking: any,
    horizontal: boolean,
    date: object,
    onPress: Function
    current: string,
    copilot: object,
    //weekDay:any
   
}


const weekDaysNames = ['CN', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7'];


export const CalendarDay: React.FC<Props>=(props)=>{
  const { state, marking = {},children,horizontal,date,onPress,current,copilot } = props;
  console.log("date"+date.weekDay)
  const [active, setActive]=useState(null);

  const contentStyle={
        content:{
          // backgroundColor:'',
          // borderColor:'',
          // borderRadius:0,
          // borderWidth:0,
        },
        text:{
          color:'black'
        },
        backgroundColor:{
          backgroundColor:'red'
        }
        
  }
 

  // if (state === 'disabled') {
  //   console.log(props.state)
  //   contentStyle.text.color = '#c1c2c1';
  //   contentStyle.content.backgroundColor='blue'
  // } else {
  //   if (marking.partiallyBlocked) {
  //     contentStyle.content.borderColor = '#c1c2c1';
  //     contentStyle.content.borderRadius = 50;
  //     contentStyle.content.backgroundColor='green'
  //     contentStyle.text.color = 'black';
  //     contentStyle.content.borderWidth = 1;
  //   } else if (marking.partiallySoldOut) {
  //     contentStyle.content.borderColor = '#e35052';
  //     contentStyle.content.borderRadius = 50;
  //     contentStyle.content.borderWidth = 1;
  //     contentStyle.content.backgroundColor='blue'
  //   }
  // }



  
  const onDayPress=()=> {
    onPress(date);
    
  }

      
    return (
      <View style={styles.container} {...props.copilot}>
        <View >
          {horizontal ? (
            <Text style={styles.weekName} numberOfLines={1}>
              {weekDaysNames[props.date.weekDay].toUpperCase()}
            </Text>
          ) : null}
        </View>
        <TouchableOpacity
          style={[styles.content, contentStyle.content,contentStyle.backgroundColor]}
          onPress={onDayPress}
          
        >
          <Text style={[styles.contentText, contentStyle.text]}>
            {String(children)}
          </Text>
         
        </TouchableOpacity>
        
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 7
  },
  weekName: {
    width: 32,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7c7c7c'
  },
  content: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentText: {
    fontSize: 20
  },
  footer: {
    flexDirection: 'row'
  },
  smallIcon: {
    width: 12,
    height: 12,
    position: 'absolute',
    top: -1,
    right: -1
  }
});