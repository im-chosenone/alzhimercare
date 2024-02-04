import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Platform, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./pages/WelcomeScreen";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import InformationScreen from "./pages/InformationScreen";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Instructions from "./pages/Instructions";
import Reports from "./pages/Reports";
import Daignostic from "./pages/Daignostic";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Sidebar from "./modules/Sidebar";
// import Realm from "realm";

// import {
//   AppProvider,
//   UserProvider,
//   RealmProvider,
//   useAuth,
// } from "@realm/react";
// Set up AppProvider, UserProvider, and RealmProvider for your app

const Stack = createNativeStackNavigator();

const shouldShowHeader = (route) => {
  return Platform.OS === "web" &&
    (route.name === "SignIn" ||
      route.name === "SignUp" ||
      route.name === "InformationScreen" ||
      route.name === "Instructions" ||
      route.name === "Test" ||
      route.name === "Reports" ||
      route.name === "Settings" ||
      route.name === "Daignostic")
    ? false
    : true;
};

// export function App() {
//   return (
//     <View style={styles.container}>
//       <NavigationContainer>
//         <Home />
//       </NavigationContainer>
//     </View>
//   );
// }

// export const AppWrapper = () => {
//   return (
//     <AppProvider id="devicesync-lomai">
//       <UserProvider fallback={LoginComponent}>
//         <RealmProvider>
//           <App1 />
//         </RealmProvider>
//       </UserProvider>
//     </AppProvider>
//   );
// };

// const LoginComponent = () => {
//   // Calling `useAuth()` requires AppProvider to be a parent
//   const { logInWithAnonymous, result } = useAuth();
//   return (
//     <View>
//       <Pressable onPress={logInWithAnonymous}>
//         <Text>Log In</Text>
//       </Pressable>
//       {result.error && <Text>{result.error.message}</Text>}
//     </View>
//   );
// };

// const App1 = () => {
//   return (
//     <View>
//       <Text>hellooooooooooooo</Text>
//     </View>
//   );
// };

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />

        <Stack.Screen
          name="InformationScreen"
          component={InformationScreen}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Hide the header for the Home screen
        />
        <Stack.Screen
          name="Reports"
          component={Reports}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })} // Hide the header for the Home screen
        />
        <Stack.Screen
          name="Instructions"
          component={Instructions}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />
        <Stack.Screen
          name="Daignostic"
          component={Daignostic}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({ route }) => ({
            headerShown: shouldShowHeader(route),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
