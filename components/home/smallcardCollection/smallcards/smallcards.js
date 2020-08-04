import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default class smallcards extends Component {
  render() {
    let text = this.props.text;
    // cut it short
    text = text.length <= 18 ? text : text.slice(0, 14) + "...";

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 80, height: 80, borderRadius: 10 }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          }}
        />
        <Text style={{ color: "white" }}> {text} </Text>
      </View>
    );
  }
}
