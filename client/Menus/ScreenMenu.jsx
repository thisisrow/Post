import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import { AuthContext } from "../context/authContext";
import Login from "../screens/Login";
import Home from "../screens/Home";
import About from "../screens/About";
import Post from "../screens/Post";
import Account from "../screens/Account";
import HederMenu from "./HederMenu";

const ScreenMenu = () => {
  //global State
  const [state] = useContext(AuthContext);
  //auth condition true false
  const authenticationUser = state?.user && state?.token;
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      {authenticationUser ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerRight: () => <HederMenu />,
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HederMenu />,
            }}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HederMenu />,
            }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HederMenu />,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ScreenMenu;
