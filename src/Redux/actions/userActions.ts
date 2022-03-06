import { UserModel } from "./../models/index";
import axios from "axios";
import { Dispatch } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../utils";
import { Alert } from "react-native";

export interface LoginAction {
  readonly type: "ON_LOGIN";
  payload: UserModel;
}

export interface StatusAction {
  readonly type: "STATUS";
  payload: any;
}

export interface Logout {
  type: "LOGOUT";
  //payload: UserModel;
}
export interface RETRIEVE_TOKEN_A {
  type: "RETRIEVE_TOKEN";
  payload: any;
}
export interface changPassword{
  readonly type:'CHANGE_PASSWORD';
  payload:string
}
export type UserAction = LoginAction | StatusAction | Logout | RETRIEVE_TOKEN_A | changPassword;

// we need to dispatch action
export const onLogin = (username: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post(`http://192.168.1.5:3000/api/login`, {
        username,
        password,
      });
      // console.log("res trả về: "+JSON.stringify(response.data));
        const result = response.data;
        const {error, status,token}=result;
        

        if(status==='ok'){
          const _token = token;
          await AsyncStorage.setItem("token", _token);
           console.log("1/. userAction đã lưu token vào storage: " + _token);
          dispatch({
            type: "ON_LOGIN",
            payload: _token
          });
        }else if(status == 404){
          console.log('loi =='+status);
          console.log(error)
        
                Alert.alert("Wrong Input", "Username or Password cannot be Empty.", [
                  { text: "OK" },
                ]);
                
          
        }else{
          console.log('loi =='+status);
          console.log(error)
          
                Alert.alert("Wrong Input", "khong biet loi gi", [
                  { text: "OK" },
                ]);
          // dispatch({
          // type: "STATUS",
          // payload:status,
        // });
        
              
            }
       
      
    } catch (error) {
      console.log("Xảy ra lỗi" + error);
      // dispatch({
      //   type: "STATUS",
      //   payload: "401",
      // });
    }
  };
};

export const UserLogout = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const a = await AsyncStorage.removeItem("token");

      console.log("Đã xóa Token ở UserLogout:" + a);

      const b = await AsyncStorage.getItem("token");
      console.log("item---:" + b);
      //const response = await axios.post<UserModel>(`${BASE_URL}mock-login`);
      dispatch({
        type: "LOGOUT",
      });
    } catch (error) {
      console.log("loi gi day " + error);
    }
  };
};


export const onChangePassword=(password:string,newpassword:string)=>{
    console.log("ĐÁ")
    console.log("passowrd"+password)
    console.log("REpassowrd"+newpassword)
    return async (dispatch: Dispatch<UserAction>)=>{
      try{
          const token = await AsyncStorage.getItem("token");
          //console.log("item99999---:" + getToken);
          const respone = await axios.post(`http://192.168.1.5:3000/api/change-password`,{
            token,
            password,
            newpassword,
          })
           const {status,error}=respone.data;
           console.log(status)
          if(status=='ok'){
            Alert.alert("Thành công","Đổi mật khẩu thành công",[{text:"OK"}])
            dispatch({
              type: 'CHANGE_PASSWORD',
              payload:'hihi'
            })

          }else{
             Alert.alert("Thất bại",error,[{text:"OK"}])
             console.log(error)
          }
      }catch(e){
          console.log(e)

      }
    }
}
