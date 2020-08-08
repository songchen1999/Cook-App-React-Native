import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export default class Setting extends Component {
  render() {
    return (
      <View style={styles.Setting}>
        <SimpleLineIcons name="settings" size={24} color="white" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Setting: {
    flexDirection: "row-reverse",
  },
});
