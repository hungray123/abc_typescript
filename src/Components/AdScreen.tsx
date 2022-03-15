import React from "react";
import { View, Text, Button,StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const AdScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.top_block}>
        <View style={Styles.top_block_element}>
        <Icon  
           
          name='home'
          type='ionicons'
          color='#00BFFF'
        />
        </View>
        <View style={Styles.top_block_element}>
        <Icon  
          name='favorite'
          type='material'
          color='#f50'
          onPress={() => console.log('hello')} />
        </View>
        <View style={Styles.top_block_element}>
        <Icon  
          name='dashboard'
          type='material'
          color='#DAA520'
          onPress={() => console.log('hello')} />
         
        </View>
        <View style={Styles.top_block_element}>
          <Icon  
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          onPress={() => console.log('hello')} />
        </View>
      </View>
      <View style={Styles.section_block}>
          <View style={Styles.section_element}>
            <Text style={Styles.section_element_txt}>145</Text>
          </View>
          <View style={Styles.section_element}>
          <Text style={Styles.section_element_txt}>432</Text>
          </View>
          <View style={Styles.section_element}>
          <Text style={Styles.section_element_txt}>89</Text>
          </View>
      </View>
    </View>
  );
};
const Styles=StyleSheet.create({

    container:{
       // backgroundColor:'red',
        //flexDirection:'row',
        flex:1
    },
    top_block:{
       // backgroundColor:'blue',
        flexDirection:'row',
        flex:0.2,
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    top_block_element:{
        backgroundColor:'#DCDCDC',
        width:70,
        height:70,
        alignItems: 'center',justifyContent: 'center',
       borderRadius:15,
        borderWidth:1,
       borderColor:'#D3D3D3',
       shadowColor:'red',
       shadowRadius: 10,
       shadowOpacity: 1,
       overflow: 'hidden',
    },

    section_block:{
           // backgroundColor:'red',
            flex:0.2,
            flexDirection:'row',
            alignItems: 'flex-end',
            justifyContent: 'space-around'
    },
    section_element:{
        backgroundColor:'#DCDCDC',
        width:90,
        height:90,
        alignItems: 'center',justifyContent: 'center',
       borderRadius:50,
        borderWidth:1,
       borderColor:'#D3D3D3',
       shadowColor:'red',
       shadowRadius: 10,
       shadowOpacity: 1,
       overflow: 'hidden',
    },
    section_element_txt:{
       fontWeight:'bold',
       fontSize:20,color:'#1E90FF'

    }

})
export default AdScreen;
