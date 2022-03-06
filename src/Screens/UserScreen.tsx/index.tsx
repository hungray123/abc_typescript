import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';

import { Icon } from 'react-native-elements/dist/icons/Icon';
import { TabView, SceneMap } from 'react-native-tab-view';
import DatePicker from '../../Components/DatePicker';
import SingleFootball from './SingleFootball';
// import DatePicker from 'react-native-datepicker';

const FirstRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
    // <SingleFootball />
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'San 7' },
    { key: 'second', title: 'San 11' },
  ]);
  const [ currentDate, setCurrentDate]=React.useState('');
  const [date,setDate]=React.useState(currentDate);
 

  React.useEffect(()=>{
      var date = new Date().getDate() //current date
      var month =new Date().getMonth() + 1
      //var year = new Date().getFullYear()

      setCurrentDate(
          month + '-' + date 
      )
     
  },[])

  return (
    <View style={{flex:1}}>
       {/* Header && Calendar */}
       <View style={{height:'12%',flexDirection:'row',alignItems:'center'}} >
                <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:10}}>
                    <Icon   name='menu'  type='ionicons' size={40} />
                    <Text style={{fontWeight:'bold',fontSize:18}}>Sân thể thao Sport 365</Text>
                </View>
                <View style={{alignSelf:'flex-end',borderWidth:1,borderColor:'gray',borderRadius:8,backgroundColor:'orange',marginLeft:40}}>
                {/* <DatePicker
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
                /> */}
                </View>
            </View>
     {/* <DatePicker/> */}
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    </View>
  );
}