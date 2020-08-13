import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
const Stack = createStackNavigator();

import home from "./Cover";

import Details from "../home/Detail/Detail";
import setProfile from "../setProfile/setProfile";
import login from "../login/login";
import imageUpload from "../imageUpload/imageUpload";

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
      <Stack.Screen name="setProfile" component={setProfile} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="imageUpload" component={imageUpload} />
    </Stack.Navigator>
  );
}

export default Nav;
