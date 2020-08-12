import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase";

export default class Setting extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.props.navigation.navigate("Upload");
            } else {
              this.props.navigation.navigate("Login");
            }
          });
        }}
      >
        <View style={styles.Setting}>
          <AntDesign name="upload" size={24} color="white" />
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
