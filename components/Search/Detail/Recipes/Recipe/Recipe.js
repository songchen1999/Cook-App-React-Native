import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  navigation,
} from "react-native";

export default function Recipe(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("MoreDetail", { ...props.recipe });
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <Image
          style={{ width: "100%", aspectRatio: 1 }}
          source={{
            uri: props.recipe.uri,
          }}
        />
        <Text
          style={{ width: props.height, color: "white", textAlign: "center" }}
          numberOfLines={2}
        >
          {props.recipe.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
