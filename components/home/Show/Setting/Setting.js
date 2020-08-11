import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import firebase from "firebase";

const checkifLoggedIn = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("user logged in");
      return true;
    } else {
      console.log("user not logged in");
      return false;
    }
  });
};

export default class Setting extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          if (checkifLoggedIn()) {
            this.props.navigation.navigate("Upload");
          }
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
