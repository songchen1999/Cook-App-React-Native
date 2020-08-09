import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Show/home";
import Detail from "../Detail/Detail";
const Stack = createStackNavigator();

function App(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerTitle: null,
      }}
    >
      <Stack.Screen
        name="Home"
        firebase={props.firebase}
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="Detail"
        firebase={props.firebase}
        component={Detail}
      />
    </Stack.Navigator>
  );
}

export default App;
