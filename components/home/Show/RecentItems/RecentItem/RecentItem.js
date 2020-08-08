import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  navigation,
} from "react-native";

export default function RecentItem(props) {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("Detail", {
          uri: props.uri,
          instructions: props.instructions,
          ingredients: props.ingredients,
          text: props.moreText,
          description: props.description,
        })
      }
    >
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
    </TouchableOpacity>
  );
}
