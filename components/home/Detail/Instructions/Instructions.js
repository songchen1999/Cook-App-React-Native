import React from "react";
import { View, Text } from "react-native";
import Instruction from "./Instruction/Instruction";

export default function Instructions(props) {
  const Instructions = props.instructions.map((e, i) => {
    return <Instruction key={i} instruction={e} index={i} />;
  });
  return (
    <View style={{ marginTop: "10%" }}>
      <Text style={{ color: "white", fontSize: 24 }}>Instructions</Text>
      {Instructions}
    </View>
  );
}
