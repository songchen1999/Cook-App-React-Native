import React from "react";
import { View, Text } from "react-native";

export default function Instruction(props) {
  return (
    <View style={{ marginVertical: 5 }}>
      <Text style={{ color: "white" }}>
        {props.index + 1}. {props.instruction}
      </Text>
    </View>
  );
}
