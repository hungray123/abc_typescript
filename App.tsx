import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
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

import { ApplicationState } from "./src/Redux";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "./src/utils";
import { createStore } from "redux";
import { UserReducer } from "./src/Redux/reducers/userReducer";
const Stack = createStackNavigator();

type Props = {
  //signIn:void
};

// ctrl + w : close tab
// ctrl + x : delete 1 line
// alt + ^ : up a line
// shift + alt + ^ : copy this line on top
// shift + alt + click : edit multi line
const App: React.FC<Props> = () => {
  const [sisLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { token, isLoading } = useSelector(
    (state: ApplicationState) => state.userReducer
  );
  // const { token } = user;
  // [token, _token] == [_token, token];

  useEffect(() => {
    setTimeout(async () => {
      let _token;
      try {
        _token = await AsyncStorage.getItem("token");
        // console.log(_token);
        // console.log("tokenAPP: " + _token);
        dispatch({ type: "RETRIEVE_TOKEN", payload: _token });
        // console.log("tokenAPP222222222: " + _token);
      } catch (error) {
        console.log(error);
      }
    });
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
  return (
    <NavigationContainer>
      {console.log("gg====" + token)}
      {token !== null || undefined ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Navigation"
            component={Navigation}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Trangchu" component={Trangchu} />
          <Stack.Screen
            name="LoginHome"
            component={LoginHome}
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
