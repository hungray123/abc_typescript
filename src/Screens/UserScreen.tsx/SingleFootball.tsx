import {View,Text,StyleSheet} from 'react-native';
import React from 'react';
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
const SingleFootball: React.FC=()=>{
    return(
        <View>
            <View style={Styles.Container}>
               
                <View  style={Styles.ColumnTime}>
            
                  <Text style={{textAlign:'center',fontWeight:'bold',margin:25}}>Sân</Text>
                  <Text style={Styles.TextTime}>6:00</Text>
                  <Text style={Styles.TextTime}>7:30</Text>
                  <Text style={Styles.TextTime}>9:00</Text>
                  <Text style={Styles.TextTime}>10:30</Text>
                  <Text style={{textAlign:'center',marginBottom:10,color:'red'}}>12:00</Text>

                  <Text style={{height:60,color:'white',textAlign:'center'}}>15:00</Text>
                  <Text style={Styles.TextTimef}>16:30</Text>
                  <Text style={Styles.TextTimef}>18:00</Text>
                  <Text style={Styles.TextTimef}>19:30</Text>
                  
                </View>
                
                <View style={Styles.TableButton}>

                    <View style={Styles.Th}>
                      
                      <View style={styles.Th_Wrap} ><Text style={styles.Th}>1</Text></View>
                      <View style={styles.Th_Wrap} ><Text style={styles.Th}>2</Text></View>
                      <View style={styles.Th_Wrap} ><Text style={styles.Th}>3</Text></View>
                      <View style={styles.Th_Wrap} ><Text style={styles.Th}>4</Text></View>
                      <View style={styles.Th_Wrap} ><Text style={styles.Th}>5</Text></View>

                    </View>
                    <View style={Styles.Th}>    
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
                            <Text style={Styles.ButtonA} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>      
                        </View>

                        <View style={Styles.Th}>   
                             <Text style={Styles.ButtonA} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />  
                                </TouchableOpacity>
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
                    </View>
                    <View style={Styles.Th}>   
                             <Text style={Styles.ButtonA} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />  
                                </TouchableOpacity>
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
                    </View>
                    <View style={Styles.Th}>   
                             <Text style={Styles.ButtonA} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />  
                                </TouchableOpacity>
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
                    </View>
                    
                        {/*Afternoon*/}
                        <View style={Styles.Th}>   
                             <Text style={Styles.Thh} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon}  name='add-circle-outline'  size={35} type='ionicons' />  
                                </TouchableOpacity>
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>      
                    </View>
                    <View style={Styles.Th}>   
                             <Text style={Styles.Thh} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />  
                                </TouchableOpacity>
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>      
                    </View>
                    <View style={Styles.Th}>   
                             <Text style={Styles.Thh} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />  
                                </TouchableOpacity>
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>      
                    </View>
                    <View style={Styles.Th}>   
                             <Text style={Styles.Thh} > 
                                <TouchableOpacity onPress={()=>alert('helo12232')}>
                                    <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />  
                                </TouchableOpacity>
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>
                            <Text style={Styles.Thh} onPress={()=>alert('helo12232')}>
                                <Icon  style={styles.Icon} name='add-circle-outline'  size={35} type='ionicons' />
                            </Text>      
                    </View>
                   
                </View>
            
            </View>
            <StatusView/>
       
        </View>
        
        
  
    )
};
const styles =StyleSheet.create({
   Icon:{
     
      // backgroundColor:'red',
      margin:10
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
    width: 57,
    height: 55,
    justifyContent:'center',
    alignItems:'center',
  
  }
  
})


export default SingleFootball;