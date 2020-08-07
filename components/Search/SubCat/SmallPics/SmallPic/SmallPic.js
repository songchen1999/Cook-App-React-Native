import React, { Component } from "react";
import { Image, Text, StyleSheet, View, Dimensions } from "react-native";

export default class SmallPic extends Component {
  render() {
    const { uri, backgroundColor, text, ...rest } = this.props;
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
          {" "}
          {text}{" "}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outterRec: {
    width: "47.5%",
    aspectRatio: 3 / 2,
    //backgroundColor: "brown",
    borderRadius: 5,
    //flexDirection: "row",
    flexDirection: "row-reverse",
    overflow: "hidden",
    justifyContent: "space-between",
    marginBottom: "5%",
  },
  Text: {
    color: "white",
    fontSize: 15,
    marginLeft: 0,
    fontWeight: "bold",
    marginTop: "4%",
    marginBottom: 0,
  },
  Img: {
    width: "45%",
    aspectRatio: 1,
    transform: [{ rotate: "30deg" }],
    marginTop: "15%",
    marginRight: "-15%",
  },
});
