import React, { Component } from "react";
import { Image, Text, StyleSheet, View, Dimensions } from "react-native";

export default class Recommendation extends Component {
  render() {
    const { uri, text, ...rest } = this.props;
    return (
      <View
        style={[
          styles.outterRec,
          { backgroundColor: this.props.backgroundColor },
        ]}
      >
        <Image
          style={styles.Img}
          source={{
            uri: uri,
          }}
        />
        <Text style={styles.Text} numberOfLines={2}>
          {text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outterRec: {
    width: "47.5%",
    aspectRatio: 5 / 2,
    //backgroundColor: "brown",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "5%",
    overflow: "hidden",
  },
  Text: {
    color: "white",
    fontSize: 15,
  },
  Img: {
    width: "40%",
    aspectRatio: 1,
    borderRadius: 5,
  },
});
