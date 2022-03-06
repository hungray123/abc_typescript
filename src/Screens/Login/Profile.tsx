import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { AuthContext } from "../../Components/Context";
import { ApplicationState, UserLogout } from "../../Redux";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Images from "../../Themes/Images";
import Icon from 'react-native-vector-icons/FontAwesome';


const Profile: React.FC<{navigation:any}> = ({navigation}) => {
  // const { signOut } = React.useContext(AuthContext);
  let a;
  console.log(a)
  const dispatch = useDispatch();
  //const {user,error} =useSelector((state:ApplicationState)=>state.userReducer);

  // const {token,username,id}=user;
  //console.log("token logout: "+token);
  // console.log("first_name: "+username);
  //  console.log("token o profile"+AsyncStorage.getItem('token'))
  const [uu, setUu] = useState("");

  useEffect(() => {
    let a;
    setTimeout(async () => {
      try {
        a = await AsyncStorage.getItem("token");
        console.log("get In4 from Api: " + a);
        var axios = require("axios");
        //const {token,username,id}=user;
        //let aaa:string=AsyncStorage.getItem('token');
        var config = {
          method: "get",
          url: "http://192.168.1.5:3000/users/me",
          headers: {
            Authorization: "Bearer " + a,
          },
        };

        axios(config)
          .then(function (response: any) {
            setUu(response.data);
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error: any) {
            console.log(error);
          });
      } catch (error) {}
    }, 500);
  }, []);
  //logout
  const Logout = async () => {
    dispatch(UserLogout());
  };
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <TouchableOpacity
    //     style={{
    //       backgroundColor: "purple",
    //       height: 50,
    //       width: 50,
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //     onPress={() => {
    //       Logout();
    //     }}
    //   >
    //     <Text>Logout</Text>
    //   </TouchableOpacity>
    //   <Text>Hello {uu} </Text>
    //   <Text>Id: </Text>
    // </View>
    <View style={Styles.container}>
       <View style={Styles.block_top} >
        <View style={{marginHorizontal:10,flexDirection:'row'}}>
        <View>
           <Image source={Images.Img_Profile} style={Styles.Image_Profile} />
         </View>
         <View style={Styles.View2_Title}>
           <View>
              <Text style={{color: 'white'}}>Hello</Text>
             <Text style={{fontWeight:'bold',fontSize:20}}>{uu}</Text>
             </View>
           </View>
         <View style={Styles.View_block_edit}>
           <View > 
             <TouchableOpacity onPress={()=>{navigation.navigate('EditProfile')}}>
             <Text style={Styles.View_Edit}><Icon name="pencil" size={20} color="#900" /></Text>
             </TouchableOpacity>
           </View>
         </View>
        </View>
       </View>
       <View style={Styles.View_Body_block}>
          <View>
              <View style={Styles.Item}>
              <TouchableOpacity>
                <View style={{marginHorizontal:10}}>
                <Text><Icon name="pencil" size={15} /> My profile</Text>
                </View>
              </TouchableOpacity>
              </View>

              <View style={Styles.Item}>
              <TouchableOpacity>
              <View style={{marginHorizontal:10}}>
              <Text><Icon name="pencil" size={15} /> Messsdage</Text>
              </View>
              </TouchableOpacity>
              </View>

              <View style={Styles.Item}>
              <TouchableOpacity onPress={()=>{navigation.navigate('ChangePassword')}}>
              <View style={{marginHorizontal:10}}>
              <Text><Icon name="pencil" size={15} /> Change Password</Text>
              </View>
              </TouchableOpacity>
              </View>

              <View style={Styles.Item}>
              <TouchableOpacity>
              <View style={{marginHorizontal:10}}>
              <Text><Icon name="pencil" size={15} /> Support</Text>
              </View>
              </TouchableOpacity>
              </View>

              <View style={Styles.Item}>
              <TouchableOpacity onPress={()=>Logout()}>
              <View style={{marginHorizontal:10}}>
              <Text style={{color:'red'}}><Icon name="pencil" size={15} color="black"  /> Thoat</Text>
              </View>
              </TouchableOpacity>
              </View>
              
              
                
          </View>

       </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  block_top:{
      flex: .3,
      flexDirection:'row',
      backgroundColor:'purple',
      alignItems: 'flex-end',
      paddingBottom:10
    
  },
  View2_Title:{
      flexDirection:'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
     // backgroundColor:'red',
      width: '50%',
      marginHorizontal:10
  },
  Image_Profile:{
    width:80,
    height:80,
    //alignItems: 'flex-end',
    //alignSelf:'stretch',
    borderRadius:50,
    borderWidth:2,
    borderColor:'white'

  },
  View_block_edit:{
    justifyContent: 'center',
    //backgroundColor:'blue',
    width:'25%',
    alignItems: 'center'
  },
  View_Edit:{
    backgroundColor:'red',
    width:40,
   //height:40,
    borderRadius: 30,
    padding:10,
    textAlign: 'center',
   
  },
  View_Body_block:{
      flexDirection:'column',
      
  },
  Item:{
    //backgroundColor:'red',
    marginVertical:1,
    paddingVertical:15,
    paddingLeft:5,
    
    borderColor:'#C4C4C4',
    borderBottomWidth:1
  }
})
export default Profile;
