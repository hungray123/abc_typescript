import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Play from "./src/Components/Play";
import OneTime from "./src/Components/OneTime";
import Navigation from "./src/BottomNavigation/Navigation";
import LoginHome from "./src/Screens/Login/LoginHome";
import SingleFootball from "./src/Screens/UserScreen.tsx/SingleFootball";
import BookFootball from "./src/Screens/UserScreen.tsx";
import TabViewExample from "./src/Screens/UserScreen.tsx";
import DetaisFootball from "./src/Screens/DetailsFootball";
import DetailsFootball from "./src/Screens/DetailsFootball";
import Linhtinh from "./src/Screens/UserScreen.tsx/linhtinh";
import Trangchu from "./src/Components/Trangchu";
import { useEffect, useMemo, useReducer, useState } from "react";
import { AuthContext } from "./src/Components/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { rootReducer, store, UserModel } from "./src/Redux";
import { LogBox } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationState } from "./src/Redux";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "./src/utils";
import { createStore } from "redux";
import { UserReducer } from "./src/Redux/reducers/userReducer";
import SplashScreen from "./src/Components/SplashScreen";
import Profile from "./src/Screens/Login/Profile";
const Stack = createStackNavigator();

type Props = {
  //signIn:void
};
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs(["Remote debugger"]);
// ctrl + w : close tab
// ctrl + x : delete 1 line
// alt + ^ : up a line
// shift + alt + ^ : copy this line on top
// shift + alt + click : edit multi line
const App: React.FC<Props> = () => {
  //const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { token, isLoading, isAdmin } = useSelector(
    (state: ApplicationState) => state.userReducer
  );
  // const { token } = user;
  // [token, _token] == [_token, token];

  useEffect(() => {
    setTimeout(async () => {
      let _token;
      let _role;
      try {
        _token = await AsyncStorage.getItem("token");
        _role = await AsyncStorage.getItem("role");
        // console.log(_token);
        // console.log("tokenAPP: " + _token);
        dispatch({ type: "RETRIEVE_TOKEN", payload: _token,role:_role });
       // dispatch({ type: "RETRIEVE_ROLE", payload: _role });
        // console.log("tokenAPP222222222: " + _token);
      } catch (error) {
        console.log(error);
      }
    },100);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
  //let isAdmin='1';
  console.log("admin là gì " + isAdmin);
  return (
   
      
    <NavigationContainer>
      {console.log("gg====" + token)}
      {token == null || undefined ? (
        <Stack.Navigator>
          <Stack.Screen
            name="hi"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginHome"
            component={LoginHome}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : isAdmin == "0" ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Navigation"
            component={Play}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Navigation"
            component={Profile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
   
    
  );
};
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AppWrapper;
