import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Surface(props) {
  return (
    <View
      style={{
        marginRight: 10,
      }}
    >
      <Image
        style={{ width: props.height, height: props.height }}
        source={{
          uri: props.uri,
        }}
      />
      <Text
        style={{ color: "black", width: props.height, color: "white" }}
        numberOfLines={2}
      >
        {props.text}
      </Text>
    </View>
  );
}
