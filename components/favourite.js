import * as React from "react";
import { View, Text, Button } from "react-native";

function Favourite({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Likes</Text>
      <Button
        title="Go to Profilesc"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default Favourite;
