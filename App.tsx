import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Play from './src/Components/Play';
import OneTime from './src/Components/OneTime';
import Navigation from './src/BottomNavigation/Navigation';
import LoginHome from './src/Screens/Login/LoginHome';
import SingleFootball from './src/Screens/UserScreen.tsx/SingleFootball';
import BookFootball from './src/Screens/UserScreen.tsx';
import TabViewExample from './src/Screens/UserScreen.tsx';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer independent={true}>
      
      <Stack.Navigator>
        <Stack.Screen name="home" component={Play} />
        <Stack.Screen name="LoginHome" component={LoginHome} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="SingleFootball" component={SingleFootball} />
        <Stack.Screen name="TabViewExample" component={TabViewExample} />
      </Stack.Navigator>

      </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
