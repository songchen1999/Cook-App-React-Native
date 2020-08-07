import React from "react";
import { View, Text } from "react-native";

export default function greeting(props) {
  const { fontWeight, fontSize, text } = props;
  return (
    <View>
      <Text
        style={{
          fontWeight: fontWeight,
          fontSize: fontSize,
          color: "white",
          marginTop: 10,
          marginBottom: 20,
        }}
        adjustsFontSizeToFit={true}
      >
        {text}
      </Text>
    </View>
  );
}
