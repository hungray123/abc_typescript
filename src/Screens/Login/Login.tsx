import React, { useState } from 'react';
import {View,Text,StyleSheet,Image,TextInput,Button, TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import ButtonLogin from '../../Components';
import Images from '../../Themes/Images';

//import ButtonLogin from '../Login/LoginHome';

// const FormLogin =styled(View)`
//     /* background: red; */
//     font-size: 20px;
//     width: 60%;
//     margin: 0px auto;
 
    
// `
// const Input =styled(TextInput)`
//     background: white;
//     font-size: 15px;
//     display: flex;
   
//     height: 50px;
//     border-radius: 20px;
//     padding: 5px;
//     border: 1px solid gray;
//     margin-bottom: 8%;
    
  
    
// `
// const Heading = styled(Text)` 
//     text-align: center;
//     font-size: 30px;
//     padding: 5px;
//     margin-bottom: 15%;
//     margin-top: 15%;
// `
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:30,  
    },
    form:{
        flexDirection:'column',
        margin:20,
        //backgroundColor:'blue'
       
    },
    Body:{
        flexDirection:'column',
       // height:400,
        backgroundColor:'green', 
    },
    Title:{
       // backgroundColor:'blue',
        fontSize:25,
        fontWeight:'bold'  
    },
    textInput:{
        height:50,
       // backgroundColor:'gray',
        marginTop:10,
        borderRadius:20,
        width:250,
        padding:5,
        borderWidth:1,
       // borderStartColor:'red'
        borderColor:'gray'
    },
    ButtonText:{
        //fontFamily:'NunitoSasn-Black',
        fontSize:13,
        textAlign:'center',
        color: 'white',
        backgroundColor:'red',
        borderRadius:20,
        padding:10,
        marginVertical:20,
        marginStart:10,
        marginEnd:10
        
    },
    OtherLoginView:{
        flexDirection:'row',
        justifyContent: 'space-around',
        marginVertical:20

    },
    Other_Logo:{
        width:50,
        height:50,
         
    }


})
type CheckboxComponentProps = {};
type Props={
    title:string,
    navigation:any
}
const Login: React.FC<Props>=({navigation})=>{
    const [check ,setCheck]=useState(false);
    return(
        <View style={styles.container} >  
            <View style={styles.form}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text style={styles.Title}>WELLCOME12😀</Text>    
                </View>   
                <View style={styles.form}>
                    <TextInput style={styles.textInput} placeholder='Usernamee'/>
                    <TextInput style={styles.textInput} placeholder='Password'/>
                    {/* <Button onPress={()=>{navigation.navigate('SingleFootball')}}  title="LOGIN ➜"/>  */}
                    <TouchableOpacity onPress={()=>{navigation.navigate('SingleFootball')}} >
                        <Text style={styles.ButtonText}>LOGIN ➜</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.OtherLoginView}>
                    <View>
                       <TouchableOpacity>
                       <Image source={Images.Fb} style={styles.Other_Logo} />
                       </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image source={Images.gg} style={styles.Other_Logo} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image source={Images.tw} style={styles.Other_Logo} />
                        </TouchableOpacity>  
                    </View>
                    
                </View>
            </View>
           
        </View>
    )

}
export default Login;