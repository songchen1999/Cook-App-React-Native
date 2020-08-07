import * as React from "react";
import Home from "../components/home/home";
import Search from "../components/Search/Search";
import Library from "../components/Your_Library";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "grey",

          style: {
            backgroundColor: "rgb(37,37,38)",
          },
          labelStyle: {
            fontSize: 20,
            margin: 0,
            padding: 0,
          },
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Your Library" component={Library} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
