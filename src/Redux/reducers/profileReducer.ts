import { UserAction } from "../actions";
import { UserModel, UserState } from "../models";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initInfornation={
    fullName:'luka'
  }

const ProfileReducer = (state=initInfornation,action:UserAction)=>{
    const { type } = action;
    switch(type) {
        case "CHANGE_NAME":
            return{
                ...state,
                fullName:action.payload
            }
        default:
            return state;
    }

}
export {ProfileReducer}