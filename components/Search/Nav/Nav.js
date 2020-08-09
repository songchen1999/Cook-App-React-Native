import * as React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../Show/Search";
import Detail from "../Detail/Detail";
// borrowing components from home detail js
import MoreDetail from "../../home/Detail/Detail";

const Stack = createStackNavigator();

function App(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen
        name="Search"
        options={{ headerShown: false }}
        component={Search}
      />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen
        name="MoreDetail"
        component={MoreDetail}
        options={{ title: null }}
      />
    </Stack.Navigator>
  );
}

export default App;
