import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export default class Setting extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("Upload");
        }}
      >
        <View style={styles.Setting}>
          <SimpleLineIcons name="settings" size={24} color="white" />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Setting: {
    flexDirection: "row-reverse",
  },
});
