import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
const Stack = createStackNavigator();

import home from "./Your_Library";

import Details from "../home/Detail/Detail";

function Nav(props) {
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
        options={{ headerShown: false }}
        component={home}
      />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
}

export default Nav;
