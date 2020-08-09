import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import SmallPic from "./SmallPic/SmallPic";

export default class SmallPics extends Component {
  render() {
    const until = this.props.number;
    const result = this.props.genres.slice(0, until).map((e, index) => {
      return (
        <SmallPic
          navigation={this.props.navigation}
          key={index}
          uri={e.uri}
          text={e.text}
          backgroundColor={e.backgroundColor}
        />
      );
    });

    return <View style={styles.outer}>{result}</View>;
  }
}

const styles = StyleSheet.create({
  outer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
