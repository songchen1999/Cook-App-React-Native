import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Ingredient(props) {
  return (
    <View
      style={{ marginVertical: 5, flexDirection: "row", alignItems: "center" }}
    >
      <Ionicons name="md-square-outline" size={24} color="white" />
      <Text style={{ color: "white", marginLeft: "2.5%" }}>
        {props.ingredient}
      </Text>
    </View>
  );
}
