import { UserAction } from "../actions";
import { UserModel, UserState } from "../models";
import AsyncStorage from "@react-native-async-storage/async-storage";
const initialState = {
  user_pass:{} as UserModel,
  token: null,
  status: null,
  isLoading: true,
};

const UserReducer = (state: UserState = initialState, action: UserAction) => {
  const { type } = action;
  switch (type) {
    case "ON_LOGIN":
       console.log('da vao reducer')
      // console.log(JSON.stringify(action.payload))

      return {
        ...state,
        token: action.payload,
        isLoading: false,
        
      };

    case "STATUS":
      console.log("vào reducer lỗi rồi" + action.payload);
      return {
        ...state,
        // user: action.payload,
        isLoading: false,
      };
    case "LOGOUT":
      //console.log("da vao reducer logout")

      return {
        ...state,
        token: null,
        isLoading: false,
      };
    case "RETRIEVE_TOKEN":
      // console.log("da vao reduser lay lai token :" + action.payload);
      return {
        ...state,
        token: action.payload,
        isLoading: false,
      };
    case "CHANGE_PASSWORD":
        return{
          ...state,
          user_pass:action.payload,
          isLoading: false,
        }

    default:
      return state;
  }
};
export { UserReducer };
