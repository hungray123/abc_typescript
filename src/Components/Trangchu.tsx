import React, { useMemo } from "react";
import { View ,Text, Button} from "react-native";

const Trangchu: React.FC<{navigation:any}>=({navigation})=>{

    // const initLoginState={
    //    isLoading:true,
    //    userName:null,
    //    userToken:null 
    // };
    // const loginReducer=(prevState,action)=>{
    //     switch(action.type){
    //         case 'RETRIEVE_TOKEN':
    //             return {
    //                 ...prevState,
    //                 userToken: action.token,
    //                 isLoading: false
    //             };
    //         case 'LOGIN':
    //             return {
    //                 ...prevState,
    //                 userName: action.id,
    //                 userToken: action.token,
    //                 isLoading: false
    //             };
    //         case 'LOGOUT':
    //             return {
    //                 ...prevState,
    //                 userToken: null,
    //                 userName: null,
    //                 isLoading: false
    //             };
    //         case 'REGISTER':
    //             return {
    //                 ...prevState,
    //                 userToken: action.token,
    //                 userName: action.id,
    //                 isLoading: false
    //             };
    //     }
       
    // };
    // const [loginState, dispatch]=React.useReducer(loginReducer,initLoginState);

    // const authContext= useMemo(()=>({
    //     signIn:(userName,password)=>{
    //         let userToken=null;
    //         if(userName=='user'&& password=='123'){
    //             userToken='ggg';
    //         }
    //         dispatch({type:'LOGIN',id:userName,token:userToken})
    //     }
    // }),[])
    return(
        <View > 
            <Text>Trang chu</Text>
            <Button 
                title="Go to Login"
                onPress={()=>{navigation.navigate('LoginHome')}}
            ></Button>
        </View>
    )
}
export default Trangchu;