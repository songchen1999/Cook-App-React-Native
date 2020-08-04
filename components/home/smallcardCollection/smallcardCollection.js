import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import SmallCard from "./smallcards/smallcards";

export default class smallcardCollection extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SmallCard text={"test string77 length"} />
        <SmallCard text={"test string77 length"} />
        <SmallCard text={"test string77 length"} />
        <SmallCard text={"test string77 length"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
